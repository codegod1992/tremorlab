import React from 'react';

import { classNames, parseTextAlignmentClassNames, parseTruncateOption } from '@utils/classname-utils';

export interface TextBlockProps {
    textAlignment?: string,
    truncate?: boolean
    children: React.ReactNode
}

const TextBlock = ({
    textAlignment = 'text-left',
    truncate = false,
    children
}: TextBlockProps) => {
    return(
        <div className={ classNames(
            parseTextAlignmentClassNames(textAlignment),
            parseTruncateOption(truncate)
        ) }
        >
            { children }
        </div>
    );
};

export default TextBlock;
