import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseDivideYClassNames,
    parseMarginTopClassNames 
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface ListProps extends BaseComponentProps {
    textColor?: string,
    divideY?: string,
    divideColor?: string,
    children: React.ReactNode
}

const List = ({
    divideY = 'divide-y',
    marginTop,
    children
}: ListProps) => {
    return(
        <ul className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseDivideYClassNames(divideY),
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
            parseMarginTopClassNames(marginTop),
            'overflow-hidden w-full',
        ) }
        >
            { children }
        </ul>
    );
};

export default List;
