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
    marginY?: string,
}

const DividerHorizontal = ({
    borderStyle = '',
    width = 'w-full',
    maxWitdth = '',
    marginY = 'my-6'
}: DividerHorizontalProps) => (
    <div className={ classNames(
        'border h-0 border-gray-200',
        parseBorderClassNames(borderStyle),
        parseWidthClassNames(width),
        parseMaxWidthClassNames(maxWitdth),
        parseMarginYClassNames(marginY),
    ) }
    />
);

export default DividerHorizontal;
