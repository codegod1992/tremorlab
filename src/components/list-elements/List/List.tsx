import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames 
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

export interface ListProps {
    textColor?: string,
    divideColor?: string,
    marginTop?: string,
    children: React.ReactNode
}

const List = ({
    marginTop,
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
            parseMarginTopClassNames(marginTop),
            'overflow-hidden w-full divide-y',
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
