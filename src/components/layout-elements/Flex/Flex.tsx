import React from 'react';

import { TwAlignItems, TwJustifyContent, TwMarginTop, TwSpaceX } from '../../../lib';
import { classNames } from 'lib';

export interface FlexProps {
    justifyContent?: TwJustifyContent,
    alignItems?: TwAlignItems,
    spaceX?: TwSpaceX,
    truncate?: boolean,
    marginTop?: TwMarginTop,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX = 'space-x-0',
    marginTop = 'mt-0',
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex w-full',
            justifyContent,
            alignItems,
            spaceX,
            marginTop,
        ) }
        >
            { children }
        </div>
    );
};

export default Flex;
