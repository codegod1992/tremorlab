import React from 'react';

import { 
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue
} from 'lib';
import { MarginTop } from '../../../lib';

export interface TableProps {
    marginTop?: MarginTop,
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
