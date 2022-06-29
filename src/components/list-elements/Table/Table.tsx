import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface TableProps extends BaseComponentProps {
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
