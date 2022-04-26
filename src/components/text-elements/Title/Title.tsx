import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextColorClassNames,
    parseTruncateOption
} from '@utils/classname-utils';

export interface TitleProps extends BaseComponentProps {
    text: string,
    truncate?: boolean,
    textColor?: string,
}

const Title = ({
    text,
    truncate = false,
    textColor = 'text-gray-600',
    marginTop
}: TitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseTruncateOption(truncate),
            parseMarginTopClassNames(marginTop),
            'text-lg font-medium shrink-0'
        ) }
        >
            { text }
        </p>
    );
};

export default Title;
