import React from 'react';

import { 
    classNames,
    parseColEndClassNames,
    parseColSpanClassNames,
    parseColStartClassNames
} from '@utils/classname-utils';

export interface ColProps {
    colSpan?: string,
    colStart?: string,
    colEnd?: string,
    children: React.ReactNode
}

const Col = ({
    colSpan = 'col-auto',
    colStart,
    colEnd,
    children,
}: ColProps) => {
    return(
        <div className={ classNames(
            parseColSpanClassNames(colSpan),
            parseColStartClassNames(colStart),
            parseColEndClassNames(colEnd)
        )}>
            { children }
        </div>
    );
};

export default Col;
