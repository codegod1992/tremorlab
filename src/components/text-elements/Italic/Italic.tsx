import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { TwMarginTop } from 'lib/spacing';
import { defaultColors } from 'lib/colors';
import { fontSize } from 'lib/font';

export interface ItalicProps {
    marginTop?: TwMarginTop,
    children: React.ReactNode;
}

const Italic = ({
    marginTop = 'mt-0',
    children
}: ItalicProps) => {
    return(
        <span className={ classNames(
            'italic',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            marginTop,
            fontSize.sm,
        ) }
        >
            { children }
        </span>
    );
};

export default Italic;
