import React, { useEffect, useRef, useState } from 'react';

import { ArrowDownHeadIcon, SearchIcon, XCircleIcon } from 'assets';
import {
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';
import { MarginTop } from '../../../lib';
import Modal from 'components/layout-elements/Modal';

export interface MultiSelectBoxProps {
    defaultValues?: any[],
    handleSelect?: { (value: any): void },
    placeholder?: string,
    marginTop?: MarginTop,
    children: React.ReactElement[] | React.ReactElement,
}

const MultiSelectBox = ({
    defaultValues = [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    placeholder = 'Select...',
    marginTop = 'mt-0',
    children,
}: MultiSelectBoxProps) => {
    const [showModal, setShowModal] = useState(false);
    
    const [selectedItems, setSelectedItems] = useState(defaultValues);

    const [searchQuery, setSearchQuery] = useState('');

    const dropdownRef = useRef(null);

    const getOptionNamesFromChildren = (children: React.ReactElement[] | React.ReactElement): string[] => (
        React.Children.map(children, (child) => {
            return String(child.props.name);
        })
    );

    const getFilteredOptionNames = (searchQuery: string, allOptionNames: string[]) => {
        return searchQuery === ''
            ? allOptionNames
            : allOptionNames.filter((optionName: string) => {
                return optionName.toLowerCase().includes(searchQuery.toLowerCase());
            });
    };

    const allOptionNames = getOptionNamesFromChildren(children);
    const filteredOptionNames = new Set(getFilteredOptionNames(searchQuery, allOptionNames));

    type ValueToNameMapping = {
        [value: string]: string
    }
    const valueToNameMapping: ValueToNameMapping = {};
    const consturctValueToNameMapping = () => {
        React.Children.map(children, (child) => {
            valueToNameMapping[child.props.value] = child.props.name;
        });
    };
    consturctValueToNameMapping();

    useEffect(() => {
        setSearchQuery('');
    }, [selectedItems]);

    return (
        <div
            ref={ dropdownRef }
            className={ classNames(
                'relative w-full min-w-[10rem] rounded-md shadow-sm border',
                getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                marginTop,
            ) }
        >
            <button
                id="multiselect-dropdown-button"
                className={ classNames(
                    'flex justify-between items-center w-full rounded-md',
                    'focus:ring-2 focus:outline-0',
                    getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                ) }
                onClick={ () => setShowModal(!showModal) }
            >
                <p className={ classNames(
                    'whitespace-nowrap truncate',
                    fontSize.sm,
                    fontWeight.md,
                    selectedItems.length !==0
                        ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                        : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                ) }>
                    { selectedItems.length !==0 ? `${selectedItems.length} Selected` : placeholder }
                </p>
                <div className="flex items-center">
                    { selectedItems.length !== 0 ? (
                        <button onClick={ (e) => {
                            e.stopPropagation(); // prevent firing parent button
                            setSelectedItems([]);
                        } }>
                            <XCircleIcon 
                                className={ classNames(
                                    'flex-none',
                                    sizing.md.height,
                                    sizing.md.width,
                                    spacing.xs.marginRight,
                                    getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                                ) }
                                aria-hidden="true"
                            />
                        </button>
                    ) : null }
                    <ArrowDownHeadIcon
                        className={ classNames(
                            'flex-none',
                            sizing.lg.height,
                            sizing.lg.width,
                            spacing.twoXs.negativeMarginRight,
                            getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                        ) }
                        aria-hidden="true"
                    />
                </div>
            </button>
            <Modal
                showModal={ showModal }
                setShowModal={ setShowModal }
                triggerRef={ dropdownRef }
            >
                <div className={ classNames(
                    'flex items-center w-full',
                    getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).bgColor,
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                ) }>
                    <span>
                        <SearchIcon className={ classNames(
                            'flex-none',
                            getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                            spacing.threeXs.negativeMarginLeft,
                            spacing.lg.marginRight,
                            sizing.md.height,
                            sizing.md.width,
                        ) } aria-hidden="true" />
                    </span>
                    <input
                        name="search"
                        type="input"
                        placeholder="Search"
                        className={ classNames(
                            'w-full focus:outline-none focus:ring-none',
                            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                            getColorVariantsFromColorThemeValue(defaultColors.transparent).bgColor,
                            spacing.sm.paddingTop,
                            spacing.sm.paddingBottom,
                            fontSize.sm,
                            fontWeight.md,
                        ) }
                        onChange={ (e) => setSearchQuery(e.target.value) }
                    />
                </div>
                { React.Children.map(children, (child) => {
                    if (filteredOptionNames.has(String(child.props.name))) {
                        return (
                            <>
                                { React.cloneElement(child, {
                                    privateProps: {
                                        selectedItems,
                                        setSelectedItems,
                                        handleSelect,
                                        setShowModal,
                                    }
                                }) }
                            </>
                        );
                    }
                }) }
            </Modal>
        </div>
    );
};

export default MultiSelectBox;
