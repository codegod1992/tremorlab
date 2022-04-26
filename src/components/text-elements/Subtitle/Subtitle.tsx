import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextColorClassNames,
    parseTruncateOption
} from '@utils/classname-utils';

export interface SubtitleProps extends BaseComponentProps {
    text: string,
    truncate?: boolean,
    textColor?: string,
}

const Subtitle = ({
    text,
    truncate = false,
    textColor = 'text-gray-400',
    marginTop
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseTruncateOption(truncate),
            parseMarginTopClassNames(marginTop),
            'text-base font-normal shrink-0'
        ) }
        >
            { text }
        </p>
    );
};

export default Subtitle;
