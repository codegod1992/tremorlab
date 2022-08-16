import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { colors } from './styles';

export interface MarkerBarProps {
    percentageValue: number,
    color?: string,
    tooltip?: string,
    marginTop?: string,
}

const MarkerBar = ({
    percentageValue,
    color = BaseColors.Blue,
    tooltip,
    marginTop
}: MarkerBarProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <div className={ classNames(
                'relative h-2 w-full flex rounded-lg items-center',
                colors[color].secondaryBgColor,
            ) }>
                <div className="absolute" style={ { 'left': `${percentageValue}%` } }>
                    <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                        <div
                            className={ classNames(
                                'h-4 w-1 rounded-lg ring-2 ring-white',
                                'right-1/2 -translate-x-1/2',
                                colors[color].primaryBgColor,
                            ) }
                        />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default MarkerBar;
