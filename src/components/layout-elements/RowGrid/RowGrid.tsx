import React from 'react';

import { classNames, parseGapXClassNames, parseGapYClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';

export interface RowGridProps extends BaseComponentProps {
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
    marginTop,
    children
}: RowGridProps) => {
    return(
        <div className={ classNames(
            parseMarginTopClassNames(marginTop),
            GridRows[numRows] ? GridRows[numRows] : 'grid-rows-none',
            parseGapXClassNames(gapX),
            parseGapYClassNames(gapY),
            'grid-flow-col',
            'grid'
        ) }>
            { children }
        </div>
    );
};

export default RowGrid;
