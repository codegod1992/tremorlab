import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseFixedHeightClassNames } from 'lib/classnameUtils';
import colorTheme from 'lib/colorTheme';

export interface TrackingBlockProps {
    color: string,
    fixedHeight?: string,
    tooltip?: string
}

const TrackingBlock = ({
    color,
    fixedHeight = 'h-10',
    tooltip
}: TrackingBlockProps) => {
    return(
        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
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
