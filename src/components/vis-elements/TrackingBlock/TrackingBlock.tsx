import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, parseBgClassNames, parseFixedHeightClassNames } from '@utils/classname-utils';

export interface TrackingBlockProps {
    bgColor: string,
    fixedHeight?: string,
    info?: string
}

const TrackingBlock = ({
    bgColor,
    fixedHeight = 'h-10',
    info
}: TrackingBlockProps) => {
    return(
        <Tooltip content={ info } className={ info ? '' : 'hidden' }>
            <div className={ classNames(
                parseBgClassNames(bgColor),
                parseFixedHeightClassNames(fixedHeight),
                'w-full rounded'
            ) }
            />
        </Tooltip>
    );
};

export default TrackingBlock; 
