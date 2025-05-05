import React from 'react';

interface ButtonVariantProps {
    variant: 'primary' | 'secondary';  // Add any variants you may need
    onClick: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const ButtonVariant: React.FC<ButtonVariantProps> = ({
    variant,
    onClick,
    children,
    type = 'button',
    className = '',
    disabled = false,
}) => {
    const baseStyles = 'py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Add Tailwind classes for different variants
    const variantStyles = variant === 'primary'
        ? 'bg-red-600 text-white hover:bg-red-600/50'
        : 'bg-gray-500 text-white hover:bg-gray-600';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ButtonVariant;
