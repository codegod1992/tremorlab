import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { TwMarginTop } from 'lib/spacing';
import { defaultColors } from 'lib/colors';

export interface BoldProps {
    marginTop?: TwMarginTop,
    children: React.ReactNode
}

const Bold = ({
    marginTop = 'mt-0',
    children,
}: BoldProps) => {
    return(
        <span className={ classNames(
            marginTop,
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            fontSize.sm,
            fontWeight.lg,
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
