import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextColorClassNames,
} from '@utils/classname-utils';

export interface TextProps extends BaseComponentProps {
    textColor?: string,
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const Caption = ({
    textColor = 'text-gray-400',
    marginTop,
    children 
}: TextProps) => {
    return(
        <p className={classNames(
            parseTextColorClassNames(textColor),
            parseMarginTopClassNames(marginTop),
            'text-sm font-light shrink-0 truncate'
        )}>
            { children }
        </p>
    );
};

export default Caption;
