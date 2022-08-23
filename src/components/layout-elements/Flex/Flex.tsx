import React from 'react';

import { TwJustifyContent, TwMarginTop } from '../../../lib';
import { 
    classNames,
    parseAlignItemsClassNames,
    parseSpaceXClassNames,

} from 'lib';

export interface FlexProps {
    justifyContent?: TwJustifyContent,
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
            justifyContent,
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
