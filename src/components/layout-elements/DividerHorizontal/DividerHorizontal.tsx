import React from 'react';

import { 
    classNames,
    parseBorderClassNames,
    parseMarginYClassNames,
    parseMaxWidthClassNames,
    parseWidthClassNames
} from '@utils/classname-utils';

export interface DividerHorizontalProps {
    borderStyle?: string,
    width?: string,
    maxWitdth?: string,
    borderColor?: string,
    marginY?: string,
}

const DividerHorizontal = ({
    borderStyle = '',
    width = 'w-full',
    maxWitdth = '',
    borderColor = 'border-gray-200',
    marginY = 'my-6'
}: DividerHorizontalProps) => (
    <div className={ classNames(
        'border h-0',
        parseBorderClassNames(borderStyle),
        parseWidthClassNames(width),
        parseMaxWidthClassNames(maxWitdth),
        parseBorderClassNames(borderColor),
        parseMarginYClassNames(marginY),
    ) }
    />
);

export default DividerHorizontal;
