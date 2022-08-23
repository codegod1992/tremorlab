import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { TwMarginTop } from 'lib/spacing';
import { defaultColors } from 'lib/colors';

export interface TableProps {
    marginTop?: TwMarginTop,
    children: React.ReactNode
}

const Table = ({
    marginTop = 'mt-0',
    children
}: TableProps) => (
    <div className="overflow-auto">
        <table className={ classNames(
            'w-full tabular-nums',
            marginTop,
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            fontSize.sm,
            fontWeight.sm,
        ) }
        >
            
            {children}
        </table>
    </div>
);

export default Table;
