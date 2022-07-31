import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface TitleProps extends BaseComponentProps {
    children: React.ReactNode,
}

const Title = ({
    marginTop,
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            parseMarginTopClassNames(marginTop),
            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
            'text-lg font-medium shrink-0 truncate'
        ) }
        >
            { children }
        </p>
    );
};

export default Title;
