import React from 'react';

import { MarginTop, MaxWidth, SpaceY, TextAlignment } from '../../../lib/inputTypes';
import {  TextAlignments, classNames, parseTruncateOption } from 'lib';

export interface BlockProps {
    maxWidth?: MaxWidth
    spaceY?: SpaceY | '',
    textAlignment?: TextAlignment,
    truncate?: boolean,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Block = ({
    maxWidth = 'max-w-none',
    spaceY = '',
    textAlignment = TextAlignments.Left,
    truncate = false,
    marginTop = 'mt-0',
    children
}: BlockProps) => {
    return(
        <div className={ classNames(
            'w-full',
            maxWidth,
            spaceY,
            textAlignment,
            parseTruncateOption(truncate),
            truncate ? 'whitespace-nowrap' : '',
            marginTop,
        ) }
        >
            { children }
        </div>
    );
};

export default Block;
