import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
} from '@utils/classname-utils';

export interface CallOutProps {
    title: string,
    text: string,
    Icon?: React.ElementType,
    fixedHeight?: string,
}

const CallOut = ({
    title,
    text,
    Icon,
    fixedHeight = 'h-24',
}: CallOutProps) => {
    return(
        <div className={ classNames(
            'bg-gray-100',
            'border-l-4',
            'border-gray-400',
            'relative rounded p-3'
        ) }
        >
            <div className="ml-1.5 overflow-hidden">
                <div className="flex items-start text-gray-700">
                    {Icon ? (
                        <Icon className="h-5 w-5 mr-2 shrink-0" aria-hidden="true" />
                    ) : null}
                    <h4 className="text-sm font-semibold mr-6">{ title }</h4>
                </div>
                <div className={ classNames(
                    parseFixedHeightClassNames(fixedHeight),
                    'text-gray-600',
                    'mt-2 text-sm overflow-y-auto'
                ) }
                >
                    { text }
                </div>
            </div>
        </div>
    );
};

export default CallOut;
