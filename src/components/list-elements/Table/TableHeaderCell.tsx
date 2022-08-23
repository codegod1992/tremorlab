import React from 'react';

import {
    classNames,
    defaultColors,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    parseTextAlignmentClassNames,
    spacing
} from 'lib';

interface TableHeaderCellProps {
    textAlignment?: string,
    children: React.ReactNode,
}

const TableHeaderCell = ({
    textAlignment = 'text-left',
    children,
}: TableHeaderCellProps) => (
    <>
        <th className={ classNames(
            'sticky whitespace-nowrap',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseTextAlignmentClassNames(textAlignment),
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
