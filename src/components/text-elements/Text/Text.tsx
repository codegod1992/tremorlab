import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseTextAlignmentClassNames,
    parseTruncateOption,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/text';
import { BaseColors } from 'lib/primitives';
import { TwHeight } from 'lib/sizing';
import { TwMarginTop } from 'lib/inputTypes';
import colorTheme from 'lib/colors';

export interface TextProps {
    color?: string,
    textAlignment?: string,
    truncate?: boolean,
    height?: TwHeight | '',
    marginTop?: TwMarginTop,
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
            getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            parseTextAlignmentClassNames(textAlignment),
            height,
            marginTop,
            parseTruncateOption(truncate),
            fontSize.sm,
            fontWeight.sm,
        )}>
            { children }
        </p>
    );
};

export default Text;
