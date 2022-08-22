import React from 'react';

import { classNames } from 'lib/classnameUtils';
import { spacing } from 'lib/spacing';

export interface AccordionBodyProps {
    children: React.ReactNode;
}

const AccordionBody = ({
    children
}: AccordionBodyProps) => {
    return(
        <div className={ classNames(
            'w-full',
            spacing.twoXl.paddingLeft,
            spacing.twoXl.paddingRight,
            spacing.twoXl.paddingBottom,
        ) }>
            { children }
        </div>
    );
};

export default AccordionBody;
