import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

interface CallButtonProps {
    /** The phone number to dial (e.g. "+1-416-8241228") */
    phone: string;
    /** Optional callback if you want to handle clicks in JS */
    onClick?: () => void;
    /** Extra Tailwind classes if you need overrides */
    className?: string;
}

const CallButton: React.FC<CallButtonProps> = ({
    phone,
    onClick,
    className = "",
}) => {
    return (
        <a
            href={`tel:${phone}`}
            onClick={onClick}
            className={`
        flex items-center space-x-2
        bg-red-600 hover:bg-red-700
        text-white font-medium
        px-5 py-2
        rounded-full
        transition
        ${className}
      `}
        >
            <FaPhoneAlt className="w-6 h-6" />
            <div className="flex flex-col">
                <span>Make a Call</span>
                <span className="font-mono">{phone}</span>
            </div>
        </a>
    );
};

export default CallButton;
