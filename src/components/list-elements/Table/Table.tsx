import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

export interface TableProps {
    marginTop?: string,
    children: React.ReactNode
}

const Table = ({
    marginTop,
    children
}: TableProps) => {
    return(
        <div className="overflow-auto">
            <table className={ classNames(
                parseMarginTopClassNames(marginTop),
                getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                'w-full font-normal text-sm tabular-nums'
            ) }
            >
                
                {children}
            </table>
        </div>
    );
};

export default Table;
