import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import { TwMarginTop } from 'lib/spacing';
import colorTheme from 'lib/colors';

export interface TitleProps {
    color?: string,
    marginTop?: TwMarginTop,
    children: React.ReactNode,
}

const Title = ({
    color = BaseColors.Gray,
    marginTop = 'mt-0',
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            'shrink-0 truncate',
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
