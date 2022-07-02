import React from 'react';

import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon';

export interface AccordionHeaderProps {
    isExpanded?: boolean,
    setExpanded?: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode;
}

const AccordionHeader = ({
    isExpanded,
    setExpanded,
    children
}: AccordionHeaderProps) => {
    return(
        <button
            className="w-full flex items-center justify-between px-4 py-3"
            onClick={ () => setExpanded!(!isExpanded) }
        >
            <div className="w-[95%] flex">
                { children }
            </div>
            <div>
                { isExpanded
                    ? <ArrowUpSLineIcon className="text-gray-400 h-6 w-6" />
                    : <ArrowDownSLineIcon className="text-gray-400 h-6 w-6" /> }
            </div>
        </button>
    );
};

export default AccordionHeader;
