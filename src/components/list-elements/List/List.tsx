import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames 
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colors';

export interface ListProps {
    marginTop?: string,
    children: React.ReactNode
}

const List = ({
    marginTop,
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            'w-full overflow-hidden divide-y',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
            parseMarginTopClassNames(marginTop),
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
