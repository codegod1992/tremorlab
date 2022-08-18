import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classnameUtils';
import { defaultColors } from '@utils/colorTheme';

interface TableBodyProps {
    children: React.ReactElement[]
}

const TableBody = ({
    children,
}: TableBodyProps) => (
    <tbody className={ classNames(
        'divide-y',
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
        'align-top overflow-x-auto'
    ) }>
        { children }
    </tbody>
);

export default TableBody;
