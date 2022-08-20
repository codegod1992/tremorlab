import React, { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import Modal from 'components/input-elements/common/Modal';
import SelectWrapper from '../common/SelectWrapper';
import { defaultColors } from 'lib/colorTheme';
import { spacing } from 'lib/spacing';
import { fontSize, fontWeight } from 'lib/font';
import { sizing } from 'lib/sizing';

export interface SelectBoxProps {
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    placeholder?: string,
    marginTop?: string,
    children: React.ReactElement[],
}

const SelectBox = ({
    defaultValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    placeholder = 'Select...',
    marginTop,
    children,
}: SelectBoxProps) => {
    const [showModal, setShowModal] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItemValue, setSelectedItemValue] = useState(defaultValue);

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

    const getOptionNamesFromChildren = (children: React.ReactElement[]): string[] => (
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

    return (
        <div className={ classNames(
            'relative',
            parseMarginTopClassNames(marginTop),
        ) }>
            <input
                key={ selectedItemValue ? valueToNameMapping[selectedItemValue] : null }
                // className="pl-4 pr-10 py-2 focus:outline-0 focus:ring-2 focus:ring-opacity-100
                // placeholder:text-gray-500 text-gray-700 text-sm font-medium flex-1 rounded-md
                // whitespace-nowrap truncate"
                className={ classNames(
                    'flex justify-between items-center w-full min-w-[10rem] rounded-md shadow-sm border',
                    'focus:ring-2 focus:outline-none',
                    getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                    getColorVariantsFromColorThemeValue(defaultColors.ring).focusRingColor,
                    spacing.twoXl.paddingLeft,
                    'pr-10',
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    'whitespace-nowrap truncate',
                    fontSize.sm,
                    fontWeight.md,
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    'placeholder:text-gray-500'
                ) }
                type="input"
                placeholder={ selectedItemValue ? undefined : placeholder }
                defaultValue={
                    selectedItemValue ? valueToNameMapping[selectedItemValue] : undefined
                }
                onChange={ (e) => setSearchQuery(e.target.value) }
                onClick={ () => setShowModal(true) }
            />
            <button
                className={ classNames(
                    'absolute top-1/2 -translate-y-1/2',
                    spacing.twoXl.right,
                ) }
                onClick={ () => setShowModal(true) }
            >
                <ChevronDownIcon
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
            <Modal showModal={ filteredOptionNames.size === 0 ? false : showModal } setShowModal={ setShowModal }>
                { React.Children.map(children, (child) => {
                    if (filteredOptionNames.has(String(child.props.name))) {
                        return (
                            <>
                                { React.cloneElement(child, {
                                    privateProps: {
                                        setSelectedItemValue: setSelectedItemValue,
                                        isActive: selectedItemValue === child.props.value,
                                        handleSelect: handleSelect,
                                        setShowModal: setShowModal,
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
