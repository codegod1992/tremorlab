import React from 'react';

import { 
    classNames,
    parseBgClassNames,
    parseBorderClassNames,
    parseMaxWidthClassNames,
    parseRoundedCornersClassNames,
    parseShadowClassNames,
    parseWidthClassNames,
} from '@utils/classname-utils';

export interface CardProps {
    maxWidth?: string,
    width?: string,
    border?: string,
    borderColor?: string,
    shadow?: string,
    roundedCorners?: string,
    bgColor?: string,
    children: React.ReactNode
}

const Card = ({
    maxWidth = 'max-w-lg',
    width = '',
    border = 'border',
    borderColor = '',
    shadow = 'shadow',
    roundedCorners = 'rounded-lg',
    bgColor = 'bg-white',
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            parseMaxWidthClassNames(maxWidth),
            parseWidthClassNames(width),
            parseBorderClassNames(border),
            parseBorderClassNames(borderColor),
            parseShadowClassNames(shadow),
            parseRoundedCornersClassNames(roundedCorners),
            parseBgClassNames(bgColor),
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
