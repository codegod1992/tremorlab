import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';

export interface TitleProps extends BaseComponentProps {
    color?: string,
    children: React.ReactNode,
}

const Title = ({
    color = BaseColors.Gray,
    marginTop,
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            parseMarginTopClassNames(marginTop),
            getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
            'text-lg font-medium shrink-0 truncate'
        ) }
        >
            { children }
        </p>
    );
};

export default Title;
