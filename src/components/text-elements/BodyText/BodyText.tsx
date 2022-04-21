import React from 'react';

import { 
    classNames,
    parseTextAlignmentClassNames,
    parseTextColorClassNames,
    parseTruncateOption 
} from '@utils/classname-utils';

export interface BodyTextProps {
    textColor?: string,
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const BodyText = ({
    textColor = 'text-gray-500',
    textAlignment = 'text-left',
    truncate = false,
    children 
}: BodyTextProps) => {
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

export default BodyText;
