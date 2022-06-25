import React from 'react';

import { classNames, parseGapXClassNames, parseGapYClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';

export interface ColGridProps extends BaseComponentProps {
    numColumns?: number,
    gapX?: string,
    gapY?: string,
    children: React.ReactNode
}

const GridCols: {[key: number]: string} = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
};

const ColGrid = ({
    numColumns = 3,
    gapX = 'gap-x-1',
    gapY = 'gap-y-1',
    marginTop,
    children
}: ColGridProps) => {
    return(
        <div className={ classNames(
            parseMarginTopClassNames(marginTop),
            GridCols[numColumns] ? GridCols[numColumns] : 'grid-cols-none',
            parseGapXClassNames(gapX),
            parseGapYClassNames(gapY),
            'grid'
        ) }>
            { children }
        </div>
    );
};

export default ColGrid;
