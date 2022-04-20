import React from 'react';

import { classNames, parseTextAlignmentClassNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface BodyTextProps {
    textColor?: string,
    textAlignment?: string,
    children: React.ReactNode
}

const BodyText = ({
    textColor = 'text-gray-500',
    textAlignment = 'text-left',
    children 
}: BodyTextProps) => {
    return(
        <p className={classNames(
            parseTextColorClassNames(textColor),
            parseTextAlignmentClassNames(textAlignment),
            'text-sm shrink-0'
        )}>
            { children }
        </p>
    );
};

export default BodyText;
