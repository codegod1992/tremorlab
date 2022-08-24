import React from 'react';

import {
    classNames,
    defaultColors,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    spacing,
} from 'lib';
import { TextAlignment } from '../../../lib';

interface TableHeaderCellProps {
    textAlignment?: TextAlignment,
    children: React.ReactNode,
}

const TableHeaderCell = ({
    textAlignment = 'text-left',
    children,
}: TableHeaderCellProps) => (
    <>
        <th className={ classNames(
            'sticky whitespace-nowrap',
            textAlignment,
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            spacing.none.top,
            spacing.twoXl.paddingLeft,
            spacing.twoXl.paddingRight,
            spacing.xl.paddingTop,
            spacing.xl.paddingBottom,
            fontWeight.lg,
        ) }>
            { children }
        </th>
    </>
);

export default TableHeaderCell;
