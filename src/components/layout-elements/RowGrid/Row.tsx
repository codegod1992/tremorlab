import React from 'react';

import { 
    classNames,
    parseRowEndClassNames,
    parseRowSpanClassNames,
    parseRowStartClassNames
} from '@utils/classname-utils';

export interface RowProps {
    rowSpan?: string,
    rowStart?: string,
    rowEnd?: string,
    children: React.ReactNode
}

const Row = ({
    rowSpan = 'row-auto',
    rowStart,
    rowEnd,
    children,
}: RowProps) => {
    return(
        <div className={ classNames(
            parseRowSpanClassNames(rowSpan),
            parseRowStartClassNames(rowStart),
            parseRowEndClassNames(rowEnd)
        )}>
            { children }
        </div>
    );
};

export default Row;
