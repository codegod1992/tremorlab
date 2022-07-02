import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseTextAlignmentClassNames } from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

interface TableHeaderCellProps {
    textAlignment?: string,
    children: React.ReactNode,
}

const TableHeaderCell = ({
    textAlignment = 'text-left',
    children,
}: TableHeaderCellProps) => (
    <th className={ classNames(
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
        parseTextAlignmentClassNames(textAlignment),
        'sticky top-0 pr-2 font-semibold truncate whitespace-nowrap'
    ) }>
        { children }
    </th>
);

export default TableHeaderCell;
