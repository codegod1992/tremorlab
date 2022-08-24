import React from 'react';

import { 
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    parseTruncateOption,
} from 'lib';
import { Color, MarginTop, TwHeight, TwTextAlignment } from '../../../lib';

export interface TextProps {
    color?: Color,
    textAlignment?: TwTextAlignment,
    truncate?: boolean,
    height?: TwHeight | '',
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Text = ({
    color = BaseColors.Gray,
    textAlignment = 'text-left',
    truncate = false,
    height = '',
    marginTop = 'mt-0',
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            'shrink-0 overflow-auto',
            height,
            marginTop,
            textAlignment,
            parseTruncateOption(truncate),
            getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            fontSize.sm,
            fontWeight.sm,
        )}>
            { children }
        </p>
    );
};

export default Text;
