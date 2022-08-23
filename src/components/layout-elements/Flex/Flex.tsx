import React from 'react';

import { 
    classNames,
    parseAlignItemsClassNames,
    parseJustifyContentClassNames,
    parseSpaceXClassNames,
} from 'lib/classnameUtils';
import { TwMarginTop } from 'lib/spacing';

export interface FlexProps {
    justifyContent?: string,
    alignItems?: string,
    spaceX?: string,
    truncate?: boolean,
    marginTop?: TwMarginTop,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX,
    marginTop = 'mt-0',
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex w-full',
            parseJustifyContentClassNames(justifyContent),
            parseAlignItemsClassNames(alignItems),
            parseSpaceXClassNames(spaceX),
            marginTop,
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
