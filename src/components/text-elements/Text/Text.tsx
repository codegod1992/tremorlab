import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseFixedHeightClassNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTruncateOption,
} from 'lib/classnameUtils';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colorTheme';

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
            getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            parseTextAlignmentClassNames(textAlignment),
            parseFixedHeightClassNames(fixedHeight),
            parseMarginTopClassNames(marginTop),
            parseTruncateOption(truncate),
            'text-sm font-normal shrink-0 overflow-auto'
        )}>
            { children }
        </p>
    );
};

export default Text;
