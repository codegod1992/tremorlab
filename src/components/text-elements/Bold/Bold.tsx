import React from 'react';

import { classNames, fontSize, fontWeight } from 'lib';
import { MarginTop } from '../../../lib';

export interface BoldProps {
    marginTop?: MarginTop,
    children: React.ReactNode
}

const Bold = ({
    marginTop = 'mt-0',
    children,
}: BoldProps) => {
    return(
        <span className={ classNames(
            'text-inherit',
            marginTop,
            fontSize.sm,
            fontWeight.lg,
        ) }
        >
            { children }
        </span>
    );
};

export default Bold;
