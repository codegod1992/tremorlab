import React from 'react';

import { border, borderRadius, classNames, parseMarginTop } from 'lib';
import { MarginTop } from '../../../lib';

export interface AccordionListProps {
    shadow?: boolean,
    marginTop?: MarginTop,
    children: React.ReactElement[] | React.ReactElement,
}

const AccordionList = ({
    shadow = true,
    marginTop = 'mt-0',
    children,
}: AccordionListProps) => {
    const numChildren = React.Children.count(children);

    return (
        <div className={ classNames(
            parseMarginTop(marginTop),
            borderRadius.lg.all,
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx === 0) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                privateProps: {
                                    shapeClassNames: classNames(
                                        'shadow-none',
                                        borderRadius.lg.top,
                                        border.sm.left,
                                        border.sm.top,
                                        border.sm.right,
                                        border.sm.bottom,
                                    ),
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
                                    shapeClassNames: classNames(
                                        'shadow-none',
                                        borderRadius.lg.bottom,
                                        border.sm.left,
                                        border.sm.right,
                                        border.sm.bottom,
                                    ),
                                },
                            }) }
                        </>
                    );
                }
                return (
                    <>
                        { React.cloneElement(child, { 
                            privateProps: {
                                shapeClassNames:  classNames(
                                    'shadow-none',
                                    border.sm.left,
                                    border.sm.right,
                                    border.sm.bottom,
                                ),
                            },
                        }) }
                    </>
                );
            })}
        </div>
    );
};

export default AccordionList;
