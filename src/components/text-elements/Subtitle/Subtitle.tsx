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

export interface SubtitleProps {
    color?: Color,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Subtitle = ({
    color = BaseColors.Gray,
    marginTop = 'mt-0',
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 whitespace-nowrap truncate',
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
