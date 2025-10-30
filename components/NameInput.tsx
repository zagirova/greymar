import React from 'react';
import { Input } from './ui/input';

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
  placeholder?: string;
  id?: string;
  className?: string;
}

export function NameInput({
  value,
  onChange,
  onBlur,
  error,
  placeholder = 'Ingrese su nombre completo',
  id = 'name',
  className = '',
}: NameInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow letters (including accented characters), spaces, and ñ
    const filtered = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    onChange(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, arrows, space
    const allowedKeys = [8, 9, 27, 13, 46, 37, 38, 39, 40, 32];
    
    if (allowedKeys.indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.ctrlKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) ||
      // Allow: Cmd+A, Cmd+C, Cmd+V, Cmd+X (Mac)
      (e.metaKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1)) {
      return;
    }
    
    // Allow letters (a-z, A-Z)
    if ((e.keyCode >= 65 && e.keyCode <= 90)) {
      return;
    }
    
    // Block everything else (numbers, special characters)
    e.preventDefault();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    // Filter out non-letter characters
    const filtered = pastedText.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    onChange(value + filtered);
  };

  return (
    <Input
      id={id}
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
      autoComplete="name"
    />
  );
}
