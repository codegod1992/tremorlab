import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
} from '@utils/classname-utils';

export interface FooterProps {
    // fixedHeight?: string,
    children: React.ReactNode;
}

// Declare colors and text as params

const Legend = ({
    // fixedHeight = 'h-20',
    children
}: FooterProps) => {
    return(
        <>
            <div className="flow-root">
                <div className="-mx-1 flex flex-wrap overflow-hidden truncate">
                    <div className="mx-2 inline-flex items-center text-sm font-normal text-gray-500 whitespace-nowrap">
                        <svg className="-ml-1 mr-1.5 h-2 w-2 text-rose-500 flex-none" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                        </svg>
                        Critical
                    </div>
                    <div className="mx-2 inline-flex items-center text-sm font-normal text-gray-500 whitespace-nowrap">
                        <svg className="-ml-1 mr-1.5 h-2 w-2 text-rose-500 flex-none" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                        </svg>
                        Critical
                    </div>
                    <div className="mx-2 inline-flex items-center text-sm font-normal text-gray-500 whitespace-nowrap">
                        <svg className="-ml-1 mr-1.5 h-2 w-2 text-rose-500 flex-none" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                        </svg>
                        This is a edge case. This is a long edge case for  dd ddddddd
                    </div>
                    <div className="mx-2 inline-flex items-center text-sm font-normal text-gray-500 whitespace-nowrap">
                        <svg className="-ml-1 mr-1.5 h-2 w-2 text-rose-500 flex-none" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                        </svg>
                        This is a 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Legend;
