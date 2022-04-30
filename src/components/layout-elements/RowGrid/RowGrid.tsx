import React from 'react';

import { classNames, parseGapXClassNames, parseGapYClassNames } from '@utils/classname-utils';

export interface RowGridProps {
    numRows?: number,
    gapX?: string,
    gapY?: string,
    children: React.ReactNode
}

const GridRows: {[key: number]: string} = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
};

const RowGrid = ({
    numRows = 3,
    gapX = 'gap-x-1',
    gapY = 'gap-y-1',
    children
}: RowGridProps) => {
    return(
        <div className={ classNames(
            GridRows[numRows] ? GridRows[numRows] : 'grid-rows-none',
            parseGapXClassNames(gapX),
            parseGapYClassNames(gapY),
            `grid-rows-${String(numRows)}`,
            'grid-flow-col',
            'grid'
        ) }>
            { children }
        </div>
    );
};

export default RowGrid;
