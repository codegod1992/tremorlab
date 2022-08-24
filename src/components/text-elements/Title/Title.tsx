import React from 'react';

import { 
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue
} from 'lib';
import { Color, MarginTop } from '../../../lib';

export interface TitleProps {
    color?: Color,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Title = ({
    color = BaseColors.Gray,
    marginTop = 'mt-0',
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 whitespace-nowrap truncate',
            marginTop,
            getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
            fontSize.lg,
            fontWeight.md,
        ) }
        >
            { children }
        </p>
    );
};

export default Title;
