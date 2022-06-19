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
    children: React.ReactNode
}

const Card = ({
    maxWidth = '',
    wFull = true,
    hFull = false,
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
            'relative overflow-hidden mx-auto text-left border shadow rounded-lg'
        ) }
        >
            <div className="p-6">
                { children }
            </div>
        </div>
    );
};

export default Card;
