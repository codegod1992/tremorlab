import React from 'react';

import { 
    classNames,
    parseDivideColorClassNames,
    parseDivideYClassNames,
    parseTextColorClassNames 
} from '@utils/classname-utils';

export interface TableProps {
    textColor?: string,
    divideY?: string,
    divideColor?: string,
    children: React.ReactNode
}

const Table = ({
    textColor = 'text-gray-500',
    divideY = 'divide-y',
    divideColor = 'divide-gray-200',
    children
}: TableProps) => {
    return(
        <table className={ classNames(
            parseTextColorClassNames(textColor),
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
