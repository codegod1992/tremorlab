import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import { defaultColors } from '@utils/colorTheme';

export interface ItalicProps extends BaseComponentProps {
    children: React.ReactNode;
}

const Italic = ({
    marginTop,
    children
}: ItalicProps) => {
    return(
        <span className={ classNames(
            'text-sm italic',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
        ) }
        >
            { children }
        </span>
    );
};

export default Italic;
