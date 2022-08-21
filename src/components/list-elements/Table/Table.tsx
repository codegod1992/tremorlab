import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { defaultColors } from 'lib/colorTheme';

export interface TableProps {
    marginTop?: string,
    children: React.ReactNode
}

const Table = ({
    marginTop,
    children
}: TableProps) => (
    <div className="overflow-auto">
        <table className={ classNames(
            'w-full tabular-nums',
            parseMarginTopClassNames(marginTop),
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
