import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTextColorClassNames,
    parseTruncateOption 
} from '@utils/classname-utils';

export interface TextProps extends BaseComponentProps {
    textColor?: string,
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const Text = ({
    textColor = 'text-gray-400',
    textAlignment = 'text-left',
    truncate = false,
    marginTop,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            parseTextColorClassNames(textColor),
            parseTextAlignmentClassNames(textAlignment),
            parseTruncateOption(truncate),
            parseMarginTopClassNames(marginTop),
            'text-sm font-light shrink-0'
        )}>
            { children }
        </p>
    );
};

export default Text;
