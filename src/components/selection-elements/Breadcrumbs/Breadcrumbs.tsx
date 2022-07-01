import React, { useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import { defaultColors } from '@utils/colorTheme';
import { useOnClickOutside } from '@utils/utils';

export interface BreadcrumbsProps extends BaseComponentProps {
    maxItems?: number,
    children: React.ReactElement[],
}

const Breadcrumbs = ({
    maxItems = 3,
    marginTop,
    children,
}: BreadcrumbsProps) => {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setShowModal(false));

    const childrenCount = React.Children.count(children);

    return (
        childrenCount <= maxItems ? (
            <div className={ classNames(
                parseMarginTopClassNames(marginTop),
                getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                'w-full flex justify-start items-center space-x-4 truncate'
            ) }>
                { React.Children.map(children, (child, idx) => {
                    if (idx === childrenCount - 1) return (
                        <span className={ classNames(
                            getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                            'truncate whitespace-nowrap'
                        ) }
                        >
                            { child }
                        </span>
                    );

                    return (
                        <>
                            <span className="hover:underline hover:underline-offset-2">{ child }</span>
                            <span className="cursor-default">/</span>
                        </>
                    );
                } ) }
            </div>
        ) : (
            <button
                className={ classNames(
                    'text-gray-700',
                    'relative inline-flex justify-between rounded-md border border-gray-300 px-4 py-2 bg-white',
                    'sm:text-sm font-medium shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-opacity-100',
                    'focus:outline-none focus:ring-blue-300 button-dropdown w-full',
                    'min-w-[10rem]'
                ) }
                onClick={ () => setShowModal(true) }
            >
                <span>Select</span>
                <ChevronDownIcon className="flex-none -mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                { showModal ? (
                    <div
                        ref={ ref }
                        className={ classNames(
                            'absolute py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y',
                            'divide-gray-100 focus:outline-none -bottom-2 translate-y-full',
                            'w-full max-h-72 overflow-y-auto z-10 left-0',
                        ) }
                    >
                        { React.Children.map(children, (child) => {
                            return (
                                <div
                                    className={ classNames(
                                        'text-gray-700',
                                        `group flex items-center justify-between px-4 py-2.5 space-x-10 w-full
                                        sm:text-sm group-hover:text-gray-500 hover:bg-gray-100 text-left`
                                    ) }
                                >
                                    { child }
                                </div>
                            );
                        }) }   
                    </div>
                ) : null }
            </button>
        )
    );
};

export default Breadcrumbs;
