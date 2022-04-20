import React from 'react';

import { classNames, parseAlignItemsClassNames, parseJustifyContentClassNames } from '@utils/classname-utils';

export interface FlexProps {
    justifyContent?: string,
    alignItems?: string,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex',
            parseJustifyContentClassNames(justifyContent),
            parseAlignItemsClassNames(alignItems)
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
