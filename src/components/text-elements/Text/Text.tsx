import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextAlignmentClassNames,
    parseTextColorClassNames,
} from '@utils/classname-utils';

export interface TextProps extends BaseComponentProps {
    textColor?: string,
    textAlignment?: string,
    children: React.ReactNode
}

const Text = ({
    textColor = 'text-gray-500',
    textAlignment = 'text-left',
    marginTop,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            parseTextColorClassNames(textColor),
            parseTextAlignmentClassNames(textAlignment),
            parseMarginTopClassNames(marginTop),
            'text-sm font-normal shrink-0 truncate'
        )}>
            { children }
        </p>
    );
};

export default Text;
