import React from 'react';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import { TwMarginTop } from 'lib/spacing';
import colorTheme from 'lib/colors';

export interface SubtitleProps {
    color?: string,
    marginTop?: TwMarginTop,
    children: React.ReactNode,
}

const Subtitle = ({
    color = BaseColors.Gray,
    marginTop = 'mt-0',
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 truncate',
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
