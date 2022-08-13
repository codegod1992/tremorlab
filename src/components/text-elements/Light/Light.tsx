import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface LightProps {
    marginTop?: string,
    children: React.ReactNode,
}

const Light = ({
    marginTop,
    children
}: LightProps) => {
    return(
        <span className={ classNames(
            'text-sm font-light',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
        ) }
        >
            { children }
        </span>
    );
};

export default Light;
