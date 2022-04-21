import React from 'react';

import { 
    classNames,
    parseAlignItemsClassNames,
    parseJustifyContentClassNames,
    parseSpaceXClassNames
} from '@utils/classname-utils';

export interface FlexProps {
    justifyContent?: string,
    alignItems?: string,
    spaceX?: string,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX,
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex',
            parseJustifyContentClassNames(justifyContent),
            parseAlignItemsClassNames(alignItems),
            parseSpaceXClassNames(spaceX)
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
