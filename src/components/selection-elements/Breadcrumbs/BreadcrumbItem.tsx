import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface BreadcrumbItemProps {
    href?: string,
    name: string,
    Icon?: React.ElementType,
}

const BreadcrumbItem = ({
    href = '#',
    name,
    Icon,
}: BreadcrumbItemProps) => (
    <a
        className={ classNames(
            'flex justify-start items-center w-full text-sm space-x-4 truncate',
        ) }
        href={ href }
    >
        { Icon ? (
            <Icon className={ classNames(
                'h-5 w-5 mr-2 text-gray-400 flex-none'
            ) } aria-hidden="true"/>
        ) : null }
        <span className="whitespace-nowrap truncate">{ name }</span>
    </a>
);

export default BreadcrumbItem;

