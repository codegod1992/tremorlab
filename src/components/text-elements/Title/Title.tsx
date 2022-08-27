import React from 'react';

import { 
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    parseTruncateOption
} from 'lib';
import { Color, MarginTop } from '../../../lib';

export interface TitleProps {
    color?: Color,
    truncate?: boolean,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Title = ({
    color = BaseColors.Gray,
    truncate = false,
    marginTop = 'mt-0',
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            truncate ? 'whitespace-nowrap' : 'shrink-0',
            parseTruncateOption(truncate),
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
