import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { TwHeight } from 'lib/sizing';
import colorTheme from 'lib/colors';

export interface TrackingBlockProps {
    color: string,
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
