import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseFixedHeightClassNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTruncateOption,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface TextProps extends BaseComponentProps {
    textAlignment?: string,
    truncate?: boolean,
    fixedHeight?: string,
    children: React.ReactNode
}

const Text = ({
    textAlignment = 'text-left',
    truncate = false,
    fixedHeight = '',
    marginTop,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
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
