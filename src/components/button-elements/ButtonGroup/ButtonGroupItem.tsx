import React from 'react';

export interface ButtonGroupItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    privateProps?: {
        handleClick?: { (value: any): void },
        setActiveButtonItem: React.Dispatch<React.SetStateAction<any>>,
        isActive: boolean,
    }
}

const ButtonGroupItem = ({
    value,
    text,
    Icon,
    privateProps,
}: ButtonGroupItemProps) => (
    <button
        className="flex px-4 py-2 text-sm"
        onClick={ () => {
            privateProps!.setActiveButtonItem!(value);
            privateProps!.handleClick ? privateProps!.handleClick(value) : null;
        }}
    >
        { Icon ? <Icon className="mr-2 w-5 h-5 opacity-70" aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ButtonGroupItem;
