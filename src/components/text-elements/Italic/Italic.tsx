import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classnameUtils';
import { defaultColors } from '@utils/colorTheme';

export interface ItalicProps {
    marginTop?: string,
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
