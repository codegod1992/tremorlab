import React from 'react';

import { classNames, parseTextColorClassNames, parseTruncateOption } from '@utils/classname-utils';

export interface SubtitleProps {
    text: string,
    truncate?: boolean,
    textColor?: string,
}

const Subtitle = ({
    text,
    truncate = false,
    textColor = 'text-gray-400',
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseTruncateOption(truncate),
            'text-base font-normal shrink-0'
        ) }
        >
            { text }
        </p>
    );
};

export default Subtitle;
