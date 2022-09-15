import React from 'react';

import { MarginTop, SpaceY, TextAlignment } from '../../../lib';
import {  TextAlignments, classNames, parseTruncateOption } from 'lib';

export interface BlockProps {
    spaceY?: SpaceY | '',
    textAlignment?: TextAlignment,
    truncate?: boolean,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Block = ({
    spaceY = '',
    textAlignment = TextAlignments.Left,
    truncate = false,
    marginTop = 'mt-0',
    children
}: BlockProps) => {
    return(
        <div className={ classNames(
            'w-full',
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
