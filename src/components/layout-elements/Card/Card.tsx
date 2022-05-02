import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    parseBgClassNames,
    parseBorderClassNames,
    parseHFullOption,
    parseMaxWidthClassNames,
    parseRoundedCornersClassNames,
    parseShadowClassNames,
    parseTextAlignmentClassNames,
    parseWFullOption,
} from '@utils/classname-utils';

export interface CardProps extends BaseComponentProps {
    maxWidth?: string,
    wFull?: boolean,
    hFull?: boolean,
    border?: string,
    borderColor?: string,
    shadow?: string,
    roundedCorners?: string,
    bgColor?: string,
    children: React.ReactNode
}

const Card = ({
    maxWidth = '',
    wFull = true,
    hFull = false,
    border = 'border',
    borderColor = '',
    shadow = 'shadow',
    roundedCorners = 'rounded-lg',
    bgColor = 'bg-white',
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            parseMaxWidthClassNames(maxWidth),
            parseWFullOption(wFull),
            parseHFullOption(hFull),
            parseBorderClassNames(border),
            parseBorderClassNames(borderColor),
            parseShadowClassNames(shadow),
            parseRoundedCornersClassNames(roundedCorners),
            parseBgClassNames(bgColor),
            parseTextAlignmentClassNames(marginTop),
            'relative overflow-hidden mx-auto text-left'
        ) }
        >
            <div className="p-6">
                { children }
            </div>
        </div>
    );
};

export default Card;
