import React from 'react';

import { 
    classNames,
    parseAlignItemsClassNames,
    parseJustifyContentClassNames,
    parseSpaceXClassNames,
    parseTruncateOption
} from '@utils/classname-utils';

export interface FlexProps {
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
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex',
            'w-full',
            parseJustifyContentClassNames(justifyContent),
            parseAlignItemsClassNames(alignItems),
            parseSpaceXClassNames(spaceX),
            parseTruncateOption(truncate)
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
