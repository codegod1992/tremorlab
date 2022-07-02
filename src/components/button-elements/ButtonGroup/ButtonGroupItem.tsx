import React from 'react';

export interface ButtonGroupItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    setActiveButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ButtonGroupItem = ({
    value,
    text,
    Icon,
    handleClick,
    setActiveButtonItem,
}: ButtonGroupItemProps) => (
    <button
        className="flex px-4 py-2 text-sm"
        onClick={ () => { setActiveButtonItem!(value); handleClick(value); }}
    >
        { Icon ? <Icon className="mr-2 w-5 h-5 opacity-70" aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ButtonGroupItem;
