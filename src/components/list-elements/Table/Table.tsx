import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { 
    classNames,
    parseDivideColorClassNames,
    parseDivideYClassNames,
    parseMarginTopClassNames,
    parseTextColorClassNames 
} from '@utils/classname-utils';

export interface TableProps extends BaseComponentProps {
    textColor?: string,
    divideY?: string,
    divideColor?: string,
    children: React.ReactNode
}

const Table = ({
    textColor = 'text-gray-500',
    divideY = 'divide-y',
    divideColor = 'divide-gray-200',
    marginTop,
    children
}: TableProps) => {
    return(
        <table className={ classNames(
            parseTextColorClassNames(textColor),
            parseMarginTopClassNames(marginTop),
            'w-full font-normal text-sm tabular-nums'
        ) }
        >
            <tbody className={ classNames(
                parseDivideYClassNames(divideY),
                parseDivideColorClassNames(divideColor),
                'divide-y divide-gray-200 align-top overflow-x-auto'
            ) }>
                {children}
            </tbody>
        </table>
    );
};

export default Table;
