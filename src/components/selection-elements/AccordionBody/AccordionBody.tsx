import React from 'react';

export interface AccordionBodyProps {
    children: React.ReactNode;
}

const AccordionBody = ({
    children
}: AccordionBodyProps) => {
    return(
        <div className="w-full border-t border-gray-200 px-2 py-2">
            { children }
        </div>
    );
};

export default AccordionBody;
