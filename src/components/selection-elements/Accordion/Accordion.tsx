import React, { useState } from 'react';

import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface AccordionProps extends BaseComponentProps {
    expanded?: boolean,
    iconPosition?: string,
    children: React.ReactNode
}

const Accordion = ({
    expanded = false,
    iconPosition = 'left',
    marginTop,
    children
}: AccordionProps) => {

    const [isExpanded, setExpanded] = useState(expanded);

    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop), 'w-full') }>
            { React.Children.map(children, (child, i) => {
                if (i === 0) {
                    return(
                        <button 
                            className="h-full w-full flex justify-between items-center py-4 px-3"
                            onClick={ () => setExpanded(!isExpanded)}
                        >
                            {iconPosition === 'left' ? (
                                <>
                                    <div className="flex-none flex justify-start w-8">
                                        {
                                            isExpanded 
                                                ? <ArrowDownSLineIcon className="text-gray-400" />
                                                : <ArrowRightSLineIcon className="text-gray-400" />
                                        }
                                    </div>
                                    { child }
                                </>
                            ) : (
                                <>
                                    { child }
                                    <div className="flex-none flex justify-end w-8">
                                        {
                                            isExpanded 
                                                ? <ArrowDownSLineIcon className="text-gray-400" />
                                                : <ArrowLeftSLineIcon className="text-gray-400" />
                                        }
                                    </div>
                                </>
                            )}
                        </button>
                    );
                }
                else {
                    return(
                        <>
                            { isExpanded ? (
                                <div className="px-3 py-4">
                                    { child }
                                </div>
                            ) : null }
                        </>
                    );
                }
            }) }
        </div>
    );
};

export default Accordion;
