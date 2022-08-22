import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

interface TableBodyProps {
    children: React.ReactElement[]
}

const TableBody = ({
    children,
}: TableBodyProps) => (
    <>
        <tbody className={ classNames(
            'align-top overflow-x-auto divide-y',
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
        ) }>
            { children }
        </tbody>
    </>
);

export default TableBody;
