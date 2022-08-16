import React from 'react';

import { ArrowDownHeadIcon, ArrowUpHeadIcon } from 'assets';

export interface AccordionHeaderProps {
    privateProps?: {
        isExpanded: boolean,
        setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    }
    children: React.ReactNode;
}

const AccordionHeader = ({
    privateProps,
    children
}: AccordionHeaderProps) => {
    return(
        <button
            className="w-full flex items-center justify-between px-4 py-3"
            onClick={ () => privateProps!.setExpanded(!privateProps!.isExpanded) }
        >
            <div className="w-[95%] flex">
                { children }
            </div>
            <div>
                { privateProps!.isExpanded
                    ? <ArrowUpHeadIcon className="text-gray-400 h-6 w-6" />
                    : <ArrowDownHeadIcon className="text-gray-400 h-6 w-6" /> }
            </div>
        </button>
    );
};

export default AccordionHeader;
