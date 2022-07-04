import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseMarginTopClassNames,
    parseTextColorClassNames,
} from '@utils/classname-utils';

export interface SubtitleProps extends BaseComponentProps {
    textColor?: string,
    children: React.ReactNode,
}

const Subtitle = ({
    textColor = 'text-gray-400',
    marginTop,
    children
}: SubtitleProps) => {
    return(
        <p className={ classNames(
            parseTextColorClassNames(textColor),
            parseMarginTopClassNames(marginTop),
            'text-base font-normal shrink-0 truncate'
        ) }
        >
            { children }
        </p>
    );
};

export default Subtitle;
