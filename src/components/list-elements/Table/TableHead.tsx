import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colors';
import { fontWeight } from 'lib/font';

interface TableHeadProps {
    children: React.ReactElement[] | React.ReactElement
}

const TableHead = ({
    children,
}: TableHeadProps) => (
    <>
        <thead className={ classNames(
            'text-left',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            fontWeight.lg,
        ) }>
            { children }
        </thead>
    </>
);

export default TableHead;
