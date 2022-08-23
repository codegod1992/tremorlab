import React from 'react';

import { 
    classNames,
    defaultColors,
    getColorVariantsFromColorThemeValue,
} from 'lib';
import { TwMarginTop } from '../../../lib';

export interface ListProps {
    marginTop?: TwMarginTop,
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
            marginTop,
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
