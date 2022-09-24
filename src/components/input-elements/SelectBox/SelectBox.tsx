import React, { useRef, useState } from 'react';

import { ArrowDownHeadIcon } from 'assets';

import { MarginTop, MaxWidth } from '../../../lib/inputTypes';
import {
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    parseMarginTop,
    parseMaxWidth,
    sizing,
    spacing
} from 'lib';
import Modal from 'components/layout-elements/Modal';

export interface SelectBoxProps {
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    placeholder?: string,
    marginTop?: MarginTop,
    maxWidth?: MaxWidth,
    children: React.ReactElement[] | React.ReactElement,
}

const SelectBox = ({
    defaultValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    placeholder = 'Select...',
    marginTop = 'mt-0',
    maxWidth = 'max-w-none',
    children,
}: SelectBoxProps) => {
    const dropdownRef = useRef(null);

    const valueToNameMapping: {[value: string]: string} = {};
    const consturctValueToNameMapping = () => {
        React.Children.map(children, (child) => {
            valueToNameMapping[child.props.value] = child.props.text;
        });
    };
    consturctValueToNameMapping();

    const getOptionNamesFromChildren = (children: React.ReactElement[] | React.ReactElement): string[] => (
        React.Children.map(children, (child) => {
            return String(child.props.text);
        })
    );

    const getFilteredOptionNames = (searchQuery: string, allOptionNames: string[]) => {
        return searchQuery === ''
            ? allOptionNames
            : allOptionNames.filter((optionName: string) => {
                return optionName.toLowerCase().includes(searchQuery.toLowerCase());
            });
    };

    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const [inputText, setInputText] = useState(selectedItem ? valueToNameMapping[selectedItem] : '');

    const allOptionNames = getOptionNamesFromChildren(children);
    const filteredOptionNames = new Set(getFilteredOptionNames(searchQuery, allOptionNames));

    const handleSelectBoxItemClick = (value: any) => {
        setInputText(valueToNameMapping[value]);
        setSelectedItem(value);
        handleSelect(value);
        setShowModal(false);
    };

    return (
        <div ref={ dropdownRef } className={ classNames(
            'relative w-full min-w-[10rem] rounded-md shadow-sm border',
            parseMaxWidth(maxWidth),
            getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
            parseMarginTop(marginTop),
        ) }>
            <input
                className={ classNames(
                    'w-full rounded-md border-0 focus:ring-2 focus:outline-0',
                    getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    spacing.twoXl.paddingLeft,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    fontSize.sm,
                    fontWeight.md,
                    'placeholder:text-gray-500',
                    'pr-10' // avoid text overflow at arrow down icon
                ) }
                type="text"
                placeholder={ placeholder }
                value={ inputText }
                onChange={ (e) => { setSearchQuery(e.target.value); setInputText(e.target.value); } }
                onClick={ () => setShowModal(!showModal) }
            />
            <button
                className={ classNames(
                    'absolute top-1/2 -translate-y-1/2',
                    spacing.twoXl.right,
                ) }
                onClick={ () => setShowModal(!showModal) }
            >
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
            </button>
            <Modal
                showModal={ filteredOptionNames.size === 0 ? false : showModal }
                setShowModal={ setShowModal }
                triggerRef={ dropdownRef }
            >
                { React.Children.map(children, (child) => {
                    if (filteredOptionNames.has(String(child.props.text))) {
                        return (
                            <>
                                { React.cloneElement(child, {
                                    privateProps: {
                                        handleSelectBoxItemClick: handleSelectBoxItemClick,
                                        isActive: selectedItem === child.props.value,
                                    }
                                }) }
                            </>
                        );
                    }
                    return null;
                }) }
            </Modal>
        </div>
    );
};

export default SelectBox;
