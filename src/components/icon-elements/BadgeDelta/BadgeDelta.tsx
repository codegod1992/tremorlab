import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { 
    badgeProportionsIconOnly,
    badgeProportionsWithText,
    deltaBgColors,
    deltaIcons,
    deltaTextColors,
    iconProportionsIconOnly,
    iconProportionsWithText,
} from './styles';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import { mapInputsToDeltaType } from '@utils/utils';

export interface BadgeDeltaProps {
    text?: string,
    deltaType: string,
    isIncreasePositive?: boolean,
    size?: string,
    tooltip?: string,
    marginTop?: string,
}

const BadgeDelta = ({
    text,
    deltaType,
    isIncreasePositive = true,
    size = 'sm',
    tooltip,
    marginTop,
}: BadgeDeltaProps) => {
    const Icon = deltaIcons[deltaType];
    const mappedDeltaType = mapInputsToDeltaType(deltaType, isIncreasePositive);
    const badgeProportions = text ? badgeProportionsWithText : badgeProportionsIconOnly;
    const iconProportions = text ? iconProportionsWithText : iconProportionsIconOnly;
    return(
        <span className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    deltaBgColors[mappedDeltaType],
                    deltaTextColors[mappedDeltaType],
                    badgeProportions[size]?.paddingX,
                    badgeProportions[size]?.paddingY,
                    badgeProportions[size]?.textSize,
                ) }>
                    <Icon className={ classNames(
                        iconProportions[size]?.margin,
                        iconProportions[size]?.iconSize
                    ) }
                    />
                    { text ? text : null}
                </span>
            </Tooltip>
        </span>
    );
};

export default BadgeDelta;
