import React from 'react';

import { 
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue
} from 'lib';
import { TwMarginTop } from '../../../lib';

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
