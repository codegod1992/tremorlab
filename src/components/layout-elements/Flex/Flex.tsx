import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { 
    classNames,
    parseAlignItemsClassNames,
    parseJustifyContentClassNames,
    parseMarginTopClassNames,
    parseSpaceXClassNames,
    parseTruncateOption
} from '@utils/classname-utils';

export interface FlexProps extends BaseComponentProps {
    justifyContent?: string,
    alignItems?: string,
    spaceX?: string,
    truncate?: boolean,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX,
    truncate = false,
    marginTop,
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex',
            'w-full',
            parseJustifyContentClassNames(justifyContent),
            parseAlignItemsClassNames(alignItems),
            parseSpaceXClassNames(spaceX),
            parseTruncateOption(truncate),
            parseMarginTopClassNames(marginTop)
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
