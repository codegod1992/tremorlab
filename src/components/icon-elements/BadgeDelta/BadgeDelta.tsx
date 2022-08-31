import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { DeltaType, DeltaTypes, MarginTop, Size } from '../../../lib';
import { Sizes, classNames, isValidSize, mapInputsToDeltaType, spacing } from 'lib';
import {
    badgeProportionsIconOnly,
    badgeProportionsWithText,
    colors,
    deltaIcons,
    iconSizes,
} from './styles';

export interface BadgeDeltaProps {
    text?: string,
    deltaType: DeltaType,
    isIncreasePositive?: boolean,
    size?: Size,
    tooltip?: string,
    marginTop?: MarginTop,
}

const BadgeDelta = ({
    text,
    deltaType = DeltaTypes.Increase,
    isIncreasePositive = true,
    size = Sizes.SM,
    tooltip,
    marginTop = 'mt-0',
}: BadgeDeltaProps) => {
    const Icon = deltaIcons[deltaType];
    const mappedDeltaType = mapInputsToDeltaType(deltaType, isIncreasePositive);
    const badgeProportions = text ? badgeProportionsWithText : badgeProportionsIconOnly;
    const badgeSize = isValidSize(size) ? size : Sizes.SM;

    return(
        <span className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    colors[mappedDeltaType].bgColor,
                    colors[mappedDeltaType].textColor,
                    badgeProportions[badgeSize].paddingLeft,
                    badgeProportions[badgeSize].paddingRight,
                    badgeProportions[badgeSize].paddingTop,
                    badgeProportions[badgeSize].paddingBottom,
                    badgeProportions[badgeSize].fontSize,
                ) }>
                    <Icon className={ classNames(
                        text ? spacing.twoXs.negativeMarginLeft : '',
                        text ? spacing.xs.marginRight : '',
                        iconSizes[badgeSize].height,
                        iconSizes[badgeSize].width,
                    ) }
                    />
                    { text ? <p className="whitespace-nowrap">{ text }</p> : null}
                </span>
            </Tooltip>
        </span>
    );
};

export default BadgeDelta;
