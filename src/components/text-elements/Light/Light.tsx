import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import { defaultColors } from '@utils/colorTheme';

export interface LightProps extends BaseComponentProps {
    children: React.ReactNode
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
