import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames 
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface ListProps extends BaseComponentProps {
    textColor?: string,
    divideColor?: string,
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
