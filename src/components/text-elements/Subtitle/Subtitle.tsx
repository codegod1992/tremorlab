import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface SubtitleProps extends BaseComponentProps {
    children: React.ReactNode,
}

const Subtitle = ({
    marginTop,
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            parseMarginTopClassNames(marginTop),
            'text-base font-normal shrink-0 truncate',
            getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
        ) }
        >
            { children }
        </p>
    );
};

export default Subtitle;
