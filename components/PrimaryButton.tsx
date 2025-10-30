import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = "" }: PrimaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#1E88E5] text-white px-8 py-3 rounded-full transition-colors duration-300 hover:bg-[#1565C0] ${className}`}
    >
      {children}
    </button>
  );
}
