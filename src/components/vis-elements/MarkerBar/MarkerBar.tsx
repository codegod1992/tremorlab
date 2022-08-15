import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

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
        <BarWrapper
            bgColor={ colors[color].secondaryBgColor }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
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
        </BarWrapper>
    );
};

export default MarkerBar;
