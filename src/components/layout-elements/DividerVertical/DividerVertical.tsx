import React from 'react';

import { 
    classNames,
    parseBorderClassNames,
    parseHeightClassNames,
    parseMarginXClassNames,
    parseMaxHeightClassNames,
} from '@utils/classname-utils';

export interface DividerVerticalProps {
    borderStyle?: string,
    height?: string,
    maxHeight?: string,
    borderColor?: string,
    marginX?: string,
}

const DividerVertical = ({
    borderStyle = '',
    height = 'h-full',
    maxHeight = '',
    borderColor = 'border-gray-200',
    marginX = 'mx-6'
}: DividerVerticalProps) => (
    <div className={ classNames(
        'border w-0',
        parseBorderClassNames(borderStyle),
        parseHeightClassNames(height),
        parseMaxHeightClassNames(maxHeight),
        parseBorderClassNames(borderColor),
        parseMarginXClassNames(marginX),
    ) }
    />
);

export default DividerVertical;
