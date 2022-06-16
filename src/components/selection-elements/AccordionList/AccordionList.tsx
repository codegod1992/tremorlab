import React from 'react';

export interface AccordionListProps {
    children: React.ReactElement[],
}

const AccordionList = ({
    children,
}: AccordionListProps) => {
    const numChildren = React.Children.count(children);
    return (
        <>
            { React.Children.map(children, (child, idx) => {
                console.log(child.props.className);
                if (idx === 0) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                borderClassNames: `border-t-2 border-l-2 border-r-2 border-b border-gray-300
                                                   rounded-t-md`
                            }) }
                        </>
                    );
                }
                if (idx === numChildren - 1) {
                    return (
                        <>
                            { React.cloneElement(child, { borderClassNames: `border-b-2 border-l-2 border-r-2 border-t
                                                                             border-gray-300 rounded-b-md` }) }
                        </>
                    );
                }
                return (
                    <>
                        { React.cloneElement(child, { borderClassNames: `border-b border-l-2 border-r-2 border-t
                                                                         border-gray-300` }) }
                    </>
                );
            })}
        </>
    );
};

export default AccordionList;
