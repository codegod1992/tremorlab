import React, { useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import Modal from '@common/Modal';
import SelectText from '@common/SelectText';
import SelectWrapper from '@common/SelectWrapper';
import { defaultColors } from '@utils/colorTheme';

export interface BreadcrumbsProps extends BaseComponentProps {
    maxItems?: number,
    currentHref?: string,
    children: React.ReactElement[],
}

const Breadcrumbs = ({
    maxItems = 3,
    currentHref,
    marginTop,
    children,
}: BreadcrumbsProps) => {
    const [showModal, setShowModal] = useState(false);

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
            <SelectWrapper>
                <button
                    className={ classNames(
                        'flex justify-between items-center w-full rounded-md',
                        'px-4 py-2',
                        'focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300',
                    ) }
                    onClick={ () => setShowModal(true) }
                >
                    { !currentHref ? <SelectText text="Select" isActive={ false } /> : (
                        React.Children.map(children, (child) => {
                            if (child.props.href === currentHref) return (
                                <SelectText text={ child.props.name } isActive={ false } />
                            );
                        })
                    ) }
                    <ChevronDownIcon className="flex-none -mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <Modal showModal={ showModal } setShowModal={ setShowModal }>
                        { React.Children.map(children, (child) => {
                            return (
                                <div
                                    className={ classNames(
                                        'text-gray-700',
                                        `group flex items-center justify-between px-4 py-2.5 space-x-10 w-full
                                        text-sm group-hover:text-gray-500 hover:bg-gray-100 text-left`
                                    ) }
                                >
                                    { child }
                                </div>
                            );
                        }) }   
                    </Modal>
                </button>
            </SelectWrapper>
        )
    );
};

export default Breadcrumbs;
