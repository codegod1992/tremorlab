import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colors';

export interface SubtitleProps {
    color?: string,
    marginTop?: string,
    children: React.ReactNode,
}

const Subtitle = ({
    color = BaseColors.Gray,
    marginTop,
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 truncate',
            parseMarginTopClassNames(marginTop),
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
