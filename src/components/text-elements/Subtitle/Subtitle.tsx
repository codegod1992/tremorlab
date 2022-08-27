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

export interface SubtitleProps {
    color?: Color,
    truncate?: boolean,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Subtitle = ({
    color = BaseColors.Gray,
    truncate = false,
    marginTop = 'mt-0',
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            truncate ? 'whitespace-nowrap' : 'shrink-0',
            parseTruncateOption(truncate),
            marginTop,
            getColorVariantsFromColorThemeValue(colorTheme[color].lightText).textColor,
            fontSize.md,
            fontWeight.sm,
        ) }
        >
            { children }
        </p>
    );
};

export default Subtitle;
