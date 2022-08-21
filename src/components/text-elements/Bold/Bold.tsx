import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { defaultColors } from 'lib/colorTheme';

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
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
            fontSize.sm,
            fontWeight.lg,
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
