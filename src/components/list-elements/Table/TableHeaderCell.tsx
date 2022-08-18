import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseTextAlignmentClassNames } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

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
        'sticky top-0 px-4 font-semibold whitespace-nowrap py-3.5'
    ) }>
        { children }
    </th>
);

export default TableHeaderCell;
