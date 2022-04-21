import React from 'react';

import { classNames, parseDivideColorClassNames, parseDivideYClassNames } from '@utils/classname-utils';

export interface ListProps {
    textColor?: string,
    divideY?: string,
    divideColor?: string,
    children: React.ReactNode
}

const List = ({
    textColor = 'text-gray-500',
    divideY = 'divide-y',
    divideColor = 'divide-gray-200',
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            textColor,
            divideY,
            parseDivideYClassNames(divideY),
            parseDivideColorClassNames(divideColor),
            'overflow-hidden',
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
