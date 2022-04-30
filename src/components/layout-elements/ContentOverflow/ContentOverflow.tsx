import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { classNames, parseFixedHeightClassNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface ContentOverflowProps extends BaseComponentProps {
    fixedHeight?: string,
    children: React.ReactNode;
}

const ContentOverflow = ({
    fixedHeight = 'h-24',
    marginTop,
    children
}: ContentOverflowProps) => {
    return(
        <div className={classNames(
            parseFixedHeightClassNames(fixedHeight),
            parseMarginTopClassNames(marginTop),
            'w-full overflow-y-auto'
        )}>
            { children }
        </div>
    );
};

export default ContentOverflow;
