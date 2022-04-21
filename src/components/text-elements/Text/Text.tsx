import React from 'react';

import { 
    classNames,
    parseTextAlignmentClassNames,
    parseTextColorClassNames,
    parseTruncateOption 
} from '@utils/classname-utils';

export interface TextProps {
    textColor?: string,
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const Text = ({
    textColor = 'text-gray-500',
    textAlignment = 'text-left',
    truncate = false,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            parseTextColorClassNames(textColor),
            parseTextAlignmentClassNames(textAlignment),
            parseTruncateOption(truncate),
            'text-sm font-normal shrink-0'
        )}>
            { children }
        </p>
    );
};

export default Text;
