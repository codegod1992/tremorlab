import React from 'react';

import { classNames, parseFixedHeightClassNames } from '@utils/classname-utils';

export interface ContentOverflowProps {
    fixedHeight?: string,
    children: React.ReactNode;
}

const ContentOverflow = ({
    fixedHeight = 'h-24',
    children
}: ContentOverflowProps) => {
    return(
        <div className={classNames(
            parseFixedHeightClassNames(fixedHeight),
            'w-full overflow-y-auto'
        )}>
            { children }
        </div>
    );
};

export default ContentOverflow;
