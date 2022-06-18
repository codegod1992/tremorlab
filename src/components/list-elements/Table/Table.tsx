import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseDivideYClassNames,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface TableProps extends BaseComponentProps {
    divideY?: string,
    children: React.ReactNode
}

const Table = ({
    divideY = 'divide-y',
    marginTop,
    children
}: TableProps) => {
    return(
        <table className={ classNames(
            parseMarginTopClassNames(marginTop),
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            'w-full font-normal text-sm tabular-nums'
        ) }
        >
            <tbody className={ classNames(
                parseDivideYClassNames(divideY),
                getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
                'align-top overflow-x-auto'
            ) }>
                {children}
            </tbody>
        </table>
    );
};

export default Table;
