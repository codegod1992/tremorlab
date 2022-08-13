import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface BoldProps {
    marginTop?: string,
    children: React.ReactNode
}

const Bold = ({
    marginTop,
    children,
}: BoldProps) => {
    return(
        <span className={ classNames(
            'text-sm font-semibold',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
