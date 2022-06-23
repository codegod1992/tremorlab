import React, { useState } from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface AccordionProps extends BaseComponentProps {
    shadow?: boolean,
    expanded?: boolean,
    shapeClassNames?: string,
    children: React.ReactElement[],
}

const Accordion = ({
    shadow,
    expanded = false,
    shapeClassNames = 'border rounded-lg',
    marginTop,
    children
}: AccordionProps) => {

    const [isExpanded, setExpanded] = useState(expanded);

    return(
        <div className={ classNames(
            'overflow-hidden',
            parseMarginTopClassNames(marginTop),
            shapeClassNames,
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx===0) return (
                    <>
                        { React.cloneElement(child, { isExpanded: isExpanded, setExpanded: setExpanded }) }
                    </>
                );

                return (
                    <div className={ isExpanded ? '' : 'hidden' }>
                        { child }
                    </div>
                );
            }) }
        </div>  
    );
};

export default Accordion;
