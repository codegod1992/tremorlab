import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface BoldProps extends BaseComponentProps {
    children: React.ReactNode
}

const Bold = ({
    children,
    marginTop,
}: BoldProps) => {
    return(
        <span className={ classNames(
            'font-semibold',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
