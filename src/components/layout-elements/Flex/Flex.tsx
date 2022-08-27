import React from 'react';

import { AlignItems, JustifyContent, MarginTop, SpaceX } from '../../../lib';
import { classNames, parseTruncateOption } from 'lib';

export interface FlexProps {
    justifyContent?: JustifyContent,
    alignItems?: AlignItems,
    spaceX?: SpaceX,
    truncate?: boolean,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Flex = ({
    justifyContent = 'justify-between',
    alignItems = 'items-center',
    spaceX = 'space-x-0',
    truncate = false,
    marginTop = 'mt-0',
    children
}: FlexProps) => {
    return(
        <div className={ classNames(
            'flex w-full',
            parseTruncateOption(truncate),
            truncate ? 'whitespace-nowrap' : '',
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
