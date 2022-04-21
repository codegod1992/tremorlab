import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface BodyValueProps {
    value: string,
    context?: string,
    valueTextColor?: string,
    contexTextColor?: string
}

const BodyValue = ({
    value,
    context,
    valueTextColor = 'text-gray-600',
    contexTextColor = 'text-gray-400'
}: BodyValueProps) => {
    return(
        <div className="flex items-end space-x-2">
            <p className={ classNames(
                parseTextColorClassNames(valueTextColor),
                'text-base font-semibold'
            ) } 
            >
                { value }
            </p>
            <p className={ classNames(
                parseTextColorClassNames(contexTextColor),
                'text-base font-normal truncate'
            ) }
            >
                { context }  
            </p>
        </div>
    );
};

export default BodyValue;
