import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMarginTopClassNames,
    parseMaxWidthClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { defaultColors } from '@utils/colorTheme';

export interface CardProps extends BaseComponentProps {
    hFull?: boolean,
    maxWidth: string,
    shadow?: boolean,
    decoration?: string,
    decorationColor?: string,
    children: React.ReactNode
}

const Card = ({
    hFull = false,
    maxWidth = '',
    shadow = true,
    decoration = '',
    decorationColor = BaseColors.Blue,
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            parseHFullOption(hFull),
            parseMaxWidthClassNames(maxWidth),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            parseMarginTopClassNames(marginTop),
            'relative mx-auto text-left border rounded-lg',
            maxWidth ? parseMaxWidthClassNames(maxWidth) : 'w-full',
            shadow ? 'shadow' : '',
            'p-6',
        ) }
        >
            { children }
        </div>
    );
};

export default Card;
