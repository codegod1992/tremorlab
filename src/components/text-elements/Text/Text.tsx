import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseFixedHeightClassNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTruncateOption,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colors';

export interface TextProps {
    color?: string,
    textAlignment?: string,
    truncate?: boolean,
    fixedHeight?: string,
    marginTop?: string,
    children: React.ReactNode,
}

const Text = ({
    color = BaseColors.Gray,
    textAlignment = 'text-left',
    truncate = false,
    fixedHeight = '',
    marginTop,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            'shrink-0 overflow-auto',
            getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            parseTextAlignmentClassNames(textAlignment),
            parseFixedHeightClassNames(fixedHeight),
            parseMarginTopClassNames(marginTop),
            parseTruncateOption(truncate),
            fontSize.sm,
            fontWeight.sm,
        )}>
            { children }
        </p>
    );
};

export default Text;
