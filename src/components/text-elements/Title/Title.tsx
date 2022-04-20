import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface TitleProps {
    title: string,
    subtitle?: string,
    titleTextColor?: string,
    subtitleTextColor?: string
}

const Title = ({
    title = 'Title',
    subtitle,
    titleTextColor = 'text-gray-600',
    subtitleTextColor = 'text-gray-400',
}: TitleProps) => {
    return(
        <>
            <p className={ classNames(
                parseTextColorClassNames(titleTextColor),
                'text-lg shrink-0 font-medium'
            ) }
            >
                { title }
            </p>
            {subtitle ? (
                <p className={ classNames(
                    parseTextColorClassNames(subtitleTextColor),
                    'text-sm shrink-0 font-normal'
                ) }
                >
                    { subtitle }
                </p>
            ) : null}
        </>
    );
};

export default Title;
