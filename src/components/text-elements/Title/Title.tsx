import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colors';

export interface TitleProps {
    color?: string,
    marginTop?: string,
    children: React.ReactNode,
}

const Title = ({
    color = BaseColors.Gray,
    marginTop,
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 truncate',
            parseMarginTopClassNames(marginTop),
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
