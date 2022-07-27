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
    hFull?: boolean,
    shadow?: boolean,
    children: React.ReactNode
}

const Card = ({
    hFull = false,
    shadow = true, 
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            parseHFullOption(hFull),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            parseMarginTopClassNames(marginTop),
            'relative mx-auto text-left border rounded-lg w-full',
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
