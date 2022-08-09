import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';

export interface SubtitleProps extends BaseComponentProps {
    color?: string,
    children: React.ReactNode,
}

const Subtitle = ({
    color = BaseColors.Gray,
    marginTop,
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            parseMarginTopClassNames(marginTop),
            'text-base font-normal shrink-0 truncate',
            getColorVariantsFromColorThemeValue(colorTheme[color].lightText).textColor,
        ) }
        >
            { children }
        </p>
    );
};

export default Subtitle;
