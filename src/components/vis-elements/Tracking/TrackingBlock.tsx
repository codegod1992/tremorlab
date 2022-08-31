import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { Color, Height } from '../../../lib';
import { classNames, getColorTheme, getColorVariantsFromColorThemeValue } from 'lib';

export interface TrackingBlockProps {
    color: Color,
    height?: Height,
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
                getColorVariantsFromColorThemeValue(getColorTheme(color).background).bgColor,
                height,
            ) }
            />
        </Tooltip>
    );
};

export default TrackingBlock; 
