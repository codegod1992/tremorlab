import React from 'react';

import { 
    classNames,
    parseAlignItemsClassNames,
    parseJustifyContentClassNames,
    parseMarginTopClassNames,
    parseSpaceXClassNames,
} from 'lib/classnameUtils';

export interface FlexProps {
    justifyContent?: string,
    alignItems?: string,
    spaceX?: string,
    truncate?: boolean,
    marginTop?: string,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX,
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
            parseMarginTopClassNames(marginTop)
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
