import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseFixedHeightClassNames } from '@utils/classname-utils';
import colorTheme from '@utils/colorTheme';

export interface TrackingBlockProps {
    color: string,
    fixedHeight?: string,
    info?: string
}

const TrackingBlock = ({
    color,
    fixedHeight = 'h-10',
    info
}: TrackingBlockProps) => {
    return(
        <Tooltip content={ info } className={ info ? '' : 'hidden' }>
            <div className={ classNames(
                getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                parseFixedHeightClassNames(fixedHeight),
                'w-full rounded'
            ) }
            />
        </Tooltip>
    );
};

export default TrackingBlock; 
