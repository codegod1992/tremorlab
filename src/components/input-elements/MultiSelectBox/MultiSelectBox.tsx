import React, { useEffect, useState } from 'react';

import { SearchIcon, XCircleIcon } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { ArrowDownHeadIcon } from 'assets';
import Modal from 'components/input-elements/common/Modal';
import { defaultColors } from 'lib/colorTheme';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

export interface MultiSelectBoxProps {
    defaultValues?: any[],
    handleSelect?: { (value: any): void },
    placeholder?: string,
    marginTop?: string,
    children: React.ReactElement[],
}

const MultiSelectBox = ({
    defaultValues = [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    placeholder = 'Select...',
    marginTop,
    children,
}: MultiSelectBoxProps) => {
    const [showModal, setShowModal] = useState(false);
    
    const [selectedItemsValues, setSelectedItemsValues] = useState(defaultValues);

    const [searchQuery, setSearchQuery] = useState('');

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
    }, [selectedItemsValues]);

    return (
        <div className={ classNames(
            'relative w-full min-w-[10rem] rounded-md shadow-sm border',
            getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
            fontSize.sm,
            fontWeight.md,
            parseMarginTopClassNames(marginTop),
        ) }>
            <button
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
                onClick={ () => setShowModal(true) }
            >
                <p className={ classNames(
                    'whitespace-nowrap truncate',
                    selectedItemsValues.length !==0
                        ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                        : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                ) }>
                    { selectedItemsValues.length !==0 ? `${selectedItemsValues.length} Selected` : placeholder }
                </p>
                <div className="flex items-center">
                    { selectedItemsValues.length !== 0 ? (
                        <button onClick={ (e) => {
                            e.stopPropagation(); // prevent firing parent button
                            setSelectedItemsValues([]);
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
            <Modal showModal={ showModal } setShowModal={ setShowModal }>
                <div className="relative w-full rounded-t-md bg-gray-50">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400 flex-none" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        aria-describedby="search-bar"
                        name="search"
                        type="input"
                        placeholder="Search"
                        className="pl-11 py-2 blockfocus:ring-2 focus:ring-opacity-100 focus:rounded-t-lg
                                focus:outline-none focus:ring-transparent focus:border-transparent border-transparent
                                bg-transparent w-full"
                        onChange={ (e) => setSearchQuery(e.target.value) }
                    />
                </div>
                <div className="pt-1">
                    { React.Children.map(children, (child) => {
                        if (filteredOptionNames.has(String(child.props.name))) {
                            return (
                                <>
                                    { React.cloneElement(child, {
                                        privateProps: {
                                            selectedItemsValues,
                                            setSelectedItemsValues,
                                            handleSelect,
                                            setShowModal,
                                        }
                                    }) }
                                </>
                            );
                        }
                    }) }
                </div>
            </Modal>
        </div>
    );
};

export default MultiSelectBox;
