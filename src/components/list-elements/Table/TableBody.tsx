import React from 'react';

import { classNames, defaultColors, getColorVariantsFromColorThemeValue } from 'lib';

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
