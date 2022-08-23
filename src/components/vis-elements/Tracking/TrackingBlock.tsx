import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { Colors, TwHeight } from '../../../lib';
import { classNames, colorTheme, getColorVariantsFromColorThemeValue } from 'lib';

export interface TrackingBlockProps {
    color: Colors,
    height?: TwHeight,
    tooltip?: string
}

const TrackingBlock = ({
    color,
    height = 'h-10',
    tooltip
}: TrackingBlockProps) => {
    return(
        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
            <div className={ classNames(
                'w-full rounded-md',
                getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                height,
            ) }
            />
        </Tooltip>
    );
};

export default TrackingBlock; 
