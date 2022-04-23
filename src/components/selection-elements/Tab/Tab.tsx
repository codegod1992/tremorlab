import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface TabProps {
    text: string,
    value: string,
    isActive: boolean,
    textColor?: string,
    activeTextColor?: string,
    handleChange: React.MouseEventHandler<HTMLButtonElement>,
}

const Tab = ({
    text,
    value,
    isActive,
    textColor = 'text-gray-400',
    activeTextColor = 'text-gray-500',
    handleChange,
}: TabProps) => {
    return(
        <li>
            <button
                className={ classNames(
                    isActive ? (
                        `border-gray-500 font-normal ${parseTextColorClassNames(activeTextColor)}`
                    ) : (
                        `border-transparent font-normal ${parseTextColorClassNames(textColor)} hover:${activeTextColor}`
                    ),
                    'whitespace-nowrap py-2 px-1 border-b-2 text-sm truncate group'
                ) }
                value={ value }
                onClick={ handleChange }
            >
                { text }
            </button>
        </li>
    );
};

export default Tab;
