import React from 'react';

import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';

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
        <div className="w-full flex items-center justify-between px-2 py-2">
            <div>
                { children }
            </div>
            <button onClick={ () => setExpanded!(!isExpanded) }>
                { isExpanded
                    ? <ArrowDownSLineIcon className="text-gray-400" />
                    : <ArrowLeftSLineIcon className="text-gray-400" /> }
            </button>
        </div>
    );
};

export default AccordionHeader;
