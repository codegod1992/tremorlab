import React from 'react';

import { 
    classNames,
    parseTextAlignmentClassNames,
    parseTextColorClassNames,
    parseTruncateOption,
} from '@utils/classname-utils';

export interface ListValueProps {
    primary: string,
    secondary?: string,
    primaryTextColor?: string,
    secondaryTextColor?: string
    textAlignment?: string,
    truncate?: boolean
}

const ListValue = ({
    primary,
    secondary,
    primaryTextColor = 'text-gray-500',
    secondaryTextColor = 'text-gray-400',
    textAlignment = 'text-left',
    truncate = false
}: ListValueProps) => {
    return(
        <div className={ classNames(
            parseTruncateOption(truncate),
            parseTextAlignmentClassNames(textAlignment)
        ) }
        >
            <p
                className={ classNames(
                    parseTextColorClassNames(primaryTextColor),
                    parseTruncateOption(truncate),
                    'text-sm font-medium'
                ) }
            >
                { primary }
            </p>
            { secondary ? (
                <p className={ classNames(
                    parseTextColorClassNames(secondaryTextColor),
                    parseTruncateOption(truncate),
                    'text-sm font-normal'
                ) }>{ secondary } </p>
            ) : null }
        </div>
    );
};

export default ListValue;
