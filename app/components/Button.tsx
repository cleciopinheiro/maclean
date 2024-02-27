import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    style?: string;
    icon?: React.ReactNode;
}

function Button({ text, onClick, style, icon}: ButtonProps) {
    return (
      <button
        type='button'
        onClick={onClick}
        className={`font-bold flex gap-2 bg-[var(--third)] rounded-full text-white px-6 py-4 justify-center items-center hover:bg-[var(--accent)] transition duration-300 ease-in-out ${style}`} 
      >
        { icon && icon }{ text }
      </button>
    );
}

export default Button;