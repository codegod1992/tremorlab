import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextColorClassNames,
} from '@utils/classname-utils';

export interface TitleProps extends BaseComponentProps {
    textColor?: string,
    children: React.ReactNode,
}

const Title = ({
    textColor = 'text-gray-600',
    marginTop,
    children
}: TitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseMarginTopClassNames(marginTop),
            'text-lg font-medium shrink-0 truncate'
        ) }
        >
            { children }
        </p>
    );
};

export default Title;
