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
    marginX?: string,
}

const DividerVertical = ({
    borderStyle = '',
    height = 'h-full',
    maxHeight = '',
    marginX = 'mx-6'
}: DividerVerticalProps) => (
    <div className={ classNames(
        'border w-0 border-gray-200',
        parseBorderClassNames(borderStyle),
        parseHeightClassNames(height),
        parseMaxHeightClassNames(maxHeight),
        parseMarginXClassNames(marginX),
    ) }
    />
);

export default DividerVertical;
