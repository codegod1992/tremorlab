import React from 'react';

import { classNames, parseBgClassNames, parseFixedHeightClassNames } from '@utils/classname-utils';

export interface TrackingBlockProps {
    fixedHeight?: string,
    bgColor: string, 
}

const TrackingBlock = ({
    fixedHeight = 'h-10',
    bgColor
}: TrackingBlockProps) => {
    return(
        <div className={ classNames(
            parseBgClassNames(bgColor),
            parseFixedHeightClassNames(fixedHeight),
            'w-full rounded'
        ) }
        >
        </div>
    );
};

export default TrackingBlock; 
