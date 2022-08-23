import React from 'react';

import { TwMarginTop } from '../../../lib';
import { classNames } from 'lib';

export interface AccordionListProps {
    shadow?: boolean,
    marginTop?: TwMarginTop,
    children: React.ReactElement[],
}

const AccordionList = ({
    shadow = true,
    marginTop = 'mt-0',
    children,
}: AccordionListProps) => {
    const numChildren = React.Children.count(children);

    return (
        <div className={ classNames(
            marginTop,
            'rounded-lg',
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx === 0) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                privateProps: {
                                    shapeClassNames: 'border-t border-l border-r border-b rounded-t-lg shadow-none',
                                },
                            }) }
                        </>
                    );
                }
                if (idx === numChildren - 1) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                privateProps: {
                                    shapeClassNames: 'border-b border-l border-r rounded-b-lg shadow-none',
                                },
                            }) }
                        </>
                    );
                }
                return (
                    <>
                        { React.cloneElement(child, { 
                            privateProps: {
                                shapeClassNames: 'border-b border-l border-r shadow-none',
                            },
                        }) }
                    </>
                );
            })}
        </div>
    );
};

export default AccordionList;
