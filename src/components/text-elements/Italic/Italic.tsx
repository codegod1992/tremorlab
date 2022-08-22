import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colors';
import { fontSize } from 'lib/font';

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
            'italic',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            parseMarginTopClassNames(marginTop),
            fontSize.sm,
        ) }
        >
            { children }
        </span>
    );
};

export default Italic;
