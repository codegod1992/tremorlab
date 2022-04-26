import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTruncateOption
} from '@utils/classname-utils';

export interface TextBlockProps extends BaseComponentProps {
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const TextBlock = ({
    textAlignment = 'text-left',
    truncate = false,
    marginTop,
    children
}: TextBlockProps) => {
    return(
        <div className={ classNames(
            parseTextAlignmentClassNames(textAlignment),
            parseTruncateOption(truncate),
            parseMarginTopClassNames(marginTop)
        ) }
        >
            { children }
        </div>
    );
};

export default TextBlock;
