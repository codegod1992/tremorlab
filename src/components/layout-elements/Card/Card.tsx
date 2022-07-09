import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMarginTopClassNames,
    parseMaxWidthClassNames,
    parseWFullOption,
} from '@utils/classname-utils';
import { defaultColors } from '@utils/colorTheme';

export interface CardProps extends BaseComponentProps {
    maxWidth?: string,
    wFull?: boolean,
    hFull?: boolean,
    shadow?: boolean,
    children: React.ReactNode
}

const Card = ({
    maxWidth = '',
    wFull = true,
    hFull = false,
    shadow = true, 
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            parseMaxWidthClassNames(maxWidth),
            parseWFullOption(wFull),
            parseHFullOption(hFull),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            parseMarginTopClassNames(marginTop),
            'relative mx-auto text-left border rounded-lg',
            shadow ? 'shadow' : '',
        ) }
        >
            <div className="p-6">
                { children }
            </div>
        </div>
    );
};

export default Card;
