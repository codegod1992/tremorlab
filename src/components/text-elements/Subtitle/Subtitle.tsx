import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classnameUtils';
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';

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
            parseMarginTopClassNames(marginTop),
            'text-base font-normal shrink-0 truncate',
            getColorVariantsFromColorThemeValue(colorTheme[color].lightText).textColor,
        ) }
        >
            { children }
        </p>
    );
};

export default Subtitle;
