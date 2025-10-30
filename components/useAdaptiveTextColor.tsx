import { useState, useEffect, RefObject } from 'react';

interface UseAdaptiveTextColorProps {
  imageRef: RefObject<HTMLImageElement>;
  textRef: RefObject<HTMLElement>;
  enabled?: boolean;
}

export function useAdaptiveTextColor({ 
  imageRef, 
  textRef, 
  enabled = true 
}: UseAdaptiveTextColorProps) {
  const [textColor, setTextColor] = useState('rgb(255, 255, 255)');

  useEffect(() => {
    if (!enabled) return;

    const calculateTextColor = () => {
      const image = imageRef.current;
      const textElement = textRef.current;

      if (!image || !textElement || !image.complete) {
        return;
      }

      try {
        // Create a canvas to read image pixels
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Get the bounding rectangles
        const textRect = textElement.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();

        // Calculate the relative position of text on the image
        const relativeX = textRect.left - imageRect.left;
        const relativeY = textRect.top - imageRect.top;

        // Calculate the scale factor
        const scaleX = image.naturalWidth / imageRect.width;
        const scaleY = image.naturalHeight / imageRect.height;

        // Calculate the sampling area on the actual image
        const sampleX = Math.max(0, relativeX * scaleX);
        const sampleY = Math.max(0, relativeY * scaleY);
        const sampleWidth = Math.min(
          textRect.width * scaleX,
          image.naturalWidth - sampleX
        );
        const sampleHeight = Math.min(
          textRect.height * scaleY,
          image.naturalHeight - sampleY
        );

        // Set canvas size to match the sampling area
        const samplingSize = 50; // Sample a smaller area for performance
        canvas.width = samplingSize;
        canvas.height = samplingSize;

        // Draw the portion of the image that's behind the text
        ctx.drawImage(
          image,
          sampleX,
          sampleY,
          sampleWidth,
          sampleHeight,
          0,
          0,
          samplingSize,
          samplingSize
        );

        // Get pixel data
        const imageData = ctx.getImageData(0, 0, samplingSize, samplingSize);
        const data = imageData.data;

        // Calculate average brightness using relative luminance formula
        let totalBrightness = 0;
        const pixelCount = data.length / 4;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Calculate relative luminance (perceived brightness)
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          totalBrightness += brightness;
        }

        const avgBrightness = totalBrightness / pixelCount;

        // Determine text color based on background brightness
        // If background is bright (>128), use dark text
        // If background is dark (<128), use light text
        if (avgBrightness > 140) {
          setTextColor('rgb(30, 30, 30)'); // Dark text for bright background
        } else {
          setTextColor('rgb(255, 255, 255)'); // Light text for dark background
        }
      } catch (error) {
        console.warn('Error calculating adaptive text color:', error);
        setTextColor('rgb(255, 255, 255)'); // Default to white
      }
    };

    // Calculate on image load
    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        calculateTextColor();
      } else {
        image.addEventListener('load', calculateTextColor);
      }
    }

    // Recalculate on window resize
    window.addEventListener('resize', calculateTextColor);
    
    // Initial calculation with a small delay to ensure layout is ready
    const timeoutId = setTimeout(calculateTextColor, 100);

    return () => {
      if (image) {
        image.removeEventListener('load', calculateTextColor);
      }
      window.removeEventListener('resize', calculateTextColor);
      clearTimeout(timeoutId);
    };
  }, [imageRef, textRef, enabled]);

  return textColor;
}
