import React from 'react';

import { GapX, GapY } from '../../../lib/inputTypes';
import { GridColsMapping, gridCols, gridColsLg, gridColsMd, gridColsSm } from './styles';
import { classNames } from 'lib';

export interface ColGridProps {
    numCols?: number,
    numColsSm?: number,
    numColsMd?: number,
    numColsLg?: number,
    gapX?: GapX,
    gapY?: GapY,
    children: React.ReactNode,
}

const ColGrid = ({
    numCols = 3,
    numColsSm,
    numColsMd,
    numColsLg,
    gapX = 'gap-x-0',
    gapY = 'gap-y-0',
    children,
}: ColGridProps) => {
    const getGridCols = (
        numCols: number | undefined,
        gridColsMapping: GridColsMapping
    ): string => {
        if (!numCols) return '';
        if (!Object.keys(gridColsMapping).includes(String(numCols))) return '';
        return gridColsMapping[numCols];
    };

    const getColClassNames = () => {
        const colsBase = getGridCols(numCols, gridCols);
        const colsSm = getGridCols(numColsSm, gridColsSm);
        const colsMd = getGridCols(numColsMd, gridColsMd);
        const colsLg = getGridCols(numColsLg, gridColsLg);

        return classNames(colsBase, colsSm, colsMd, colsLg);
    };

    return (
        <div className={ classNames(
            'grid',
            getColClassNames(),
            gapX,
            gapY,
        ) }>
            { children }
        </div>
    );
};

export default ColGrid;
