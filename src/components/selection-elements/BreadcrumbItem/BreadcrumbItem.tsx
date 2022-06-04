import { classNames, parseTextColorClassNames } from '@utils/classname-utils';
import React from 'react';

export interface BreadcrumbItemProps {
    href?: string,
    spaceX?: string,
    children: React.ReactNode,
}

const BreadcrumbItem = ({
    children,
    spaceX = 'space-x-1',
    href = '#',
}: BreadcrumbItemProps) => (
    <a
        className={ classNames(
            'flex justify-between items-center max-w-sm w-full text-base font-medium',
            'space-x-4',
        ) }
        href={ href }
    >
        { children }
    </a>
);

export default BreadcrumbItem;

