import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseDivideColorClassNames,
    parseDivideYClassNames,
    parseMarginTopClassNames 
} from '@utils/classname-utils';

export interface ListProps extends BaseComponentProps {
    textColor?: string,
    divideY?: string,
    divideColor?: string,
    children: React.ReactNode
}

const List = ({
    textColor = 'text-gray-500',
    divideY = 'divide-y',
    divideColor = 'divide-gray-200',
    marginTop,
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            textColor,
            divideY,
            parseDivideYClassNames(divideY),
            parseDivideColorClassNames(divideColor),
            parseMarginTopClassNames(marginTop),
            'overflow-hidden w-full',
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
