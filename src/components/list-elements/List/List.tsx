import React from 'react';

import { 
    classNames,
    defaultColors,
    getColorVariantsFromColorThemeValue,
    parseMarginTop,
} from 'lib';
import { MarginTop } from '../../../lib';

export interface ListProps {
    marginTop?: MarginTop,
    children: React.ReactNode
}

const List = ({
    marginTop = 'mt-0',
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            'w-full overflow-hidden divide-y',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
            parseMarginTop(marginTop),
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
