import React, { useState } from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface AccordionProps extends BaseComponentProps {
    shadow?: boolean,
    expanded?: boolean,
    privateProps?: {
        shapeClassNames: string,
    },
    children: React.ReactElement[],
}

const Accordion = ({
    shadow,
    expanded = false,
    privateProps = {
        shapeClassNames: 'border rounded-lg',
    },
    marginTop,
    children
}: AccordionProps) => {

    const [isExpanded, setExpanded] = useState(expanded);

    return(
        <div className={ classNames(
            'overflow-hidden',
            parseMarginTopClassNames(marginTop),
            privateProps!.shapeClassNames,
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx===0) return (
                    <>
                        { React.cloneElement(child, {
                            privateProps: {
                                isExpanded: isExpanded,
                                setExpanded: setExpanded
                            } })
                        }
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
