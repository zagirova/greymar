import React from 'react';
import { Input } from './ui/input';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
  placeholder?: string;
  id?: string;
  className?: string;
}

// Format phone number as user types - only accepts numbers
const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters
  const phoneNumber = value.replace(/\D/g, '');
  
  // Limit to 10 digits
  const limitedNumber = phoneNumber.slice(0, 10);
  
  // Format as (xxx) xxx-xxxx
  if (limitedNumber.length === 0) {
    return '';
  } else if (limitedNumber.length <= 3) {
    return `(${limitedNumber}`;
  } else if (limitedNumber.length <= 6) {
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`;
  } else {
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`;
  }
};

export function PhoneInput({
  value,
  onChange,
  onBlur,
  error,
  placeholder = '(XXX) XXX-XXXX',
  id = 'phone',
  className = '',
}: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow numbers and formatting characters
    const formatted = formatPhoneNumber(inputValue);
    onChange(formatted);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, arrows
    const allowedKeys = [8, 9, 27, 13, 46, 37, 38, 39, 40];
    
    if (allowedKeys.indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.ctrlKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) ||
      // Allow: Cmd+A, Cmd+C, Cmd+V, Cmd+X (Mac)
      (e.metaKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1)) {
      return;
    }
    
    // Prevent if not a number key (0-9 on main keyboard or numpad)
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && 
        (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const formatted = formatPhoneNumber(pastedText);
    onChange(formatted);
  };

  return (
    <Input
      id={id}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
      autoComplete="tel"
    />
  );
}
