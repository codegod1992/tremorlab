import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface TabProps {
    name: string,
    value: any,
    isActive?: boolean,
    textColor?: string,
    activeTextColor?: string,
    setSelectedTab?: React.Dispatch<React.SetStateAction<string>>,
}

const Tab = ({
    name,
    value,
    isActive,
    textColor = 'text-gray-400',
    activeTextColor = 'text-gray-500',
    setSelectedTab,
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
                onClick={ () => setSelectedTab!(value) }
            >
                { name }
            </button>
        </li>
    );
};

export default Tab;
