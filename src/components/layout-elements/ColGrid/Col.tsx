import React from 'react';

import { ColEnd, ColSpan, ColStart } from '../../../lib/inputTypes';
import { classNames } from 'lib';

export interface ColProps {
    colSpan?: ColSpan,
    colStart?: ColStart | '',
    colEnd?: ColEnd | '',
    children: React.ReactNode,
}

const Col = ({
    colSpan = 'col-span-1',
    colStart = '',
    colEnd = '',
    children,
}: ColProps) => {
    return (
        <div className={ classNames(
            'grid',
            colSpan,
            colStart,
            colEnd,
        ) }>
            { children }
        </div>
    );
};

export default Col;
