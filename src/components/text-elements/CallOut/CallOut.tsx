import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface CalloutProps {
    title: string,
    text: string,
    Icon?: React.ElementType,
    color?: string,
    fixedHeight?: string,
    marginTop?: string,
}

const Callout = ({
    title,
    text,
    Icon,
    color = BaseColors.Blue,
    fixedHeight = '',
    marginTop
}: CalloutProps) => {
    return(
        <div className={ classNames(
            parseMarginTopClassNames(marginTop),
            colors[color].bgColor,
            colors[color].borderColor,
            'relative rounded border-l-4 p-3'
        ) }
        >
            <div className="ml-1.5 overflow-hidden">
                <div className={ classNames(
                    colors[color].headerTextColor,
                    'flex items-start'
                ) }
                >
                    {Icon ? (
                        <Icon className="h-5 w-5 mr-2 shrink-0" aria-hidden="true" />
                    ) : null}
                    <h4 className="text-sm font-semibold mr-6">{ title }</h4>
                </div>
                <div className={ classNames(
                    parseFixedHeightClassNames(fixedHeight),
                    colors[color].bodyTextColor,
                    'mt-2 text-sm overflow-y-auto'
                ) }
                >
                    { text }
                </div>
            </div>
        </div>
    );
};

export default Callout;
