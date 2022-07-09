import React, { useEffect, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import Modal from '@common/Modal';
import SelectWrapper from '@common/SelectWrapper';

export interface SelectBoxProps extends BaseComponentProps {
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    placeholder?: string,
    children: React.ReactElement[],
}

const SelectBox = ({
    defaultValue,
    handleSelect,
    placeholder = 'Select',
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

    useEffect(() => {
        if (selectedItemValue) {
            if(handleSelect) handleSelect(selectedItemValue);
            setShowModal(false);
        }
    }, [selectedItemValue]);

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
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <SelectWrapper>
                <input
                    key={ selectedItemValue ? valueToNameMapping[selectedItemValue] : null }
                    className="pl-4 pr-10 py-2 focus:outline-0 focus:ring-2 focus:ring-opacity-100
                    placeholder:text-gray-500 text-gray-700 text-sm font-medium flex-1 rounded-md
                    whitespace-nowrap truncate"
                    type="input"
                    placeholder={ selectedItemValue ? undefined : placeholder }
                    defaultValue={
                        selectedItemValue ? valueToNameMapping[selectedItemValue] : undefined
                    }
                    onChange={ (e) => setSearchQuery(e.target.value) }
                    onClick={ () => setShowModal(true) }
                />
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-3"
                    onClick={ () => setShowModal(true) }
                >
                    <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </button>
                <Modal showModal={ filteredOptionNames.size === 0 ? false : showModal } setShowModal={ setShowModal }>
                    { React.Children.map(children, (child) => {
                        if (filteredOptionNames.has(String(child.props.name))) {
                            return (
                                <>
                                    { React.cloneElement(child, {
                                        setSelectedItemValue: setSelectedItemValue,
                                        isActive: selectedItemValue === child.props.value
                                    }) }
                                </>
                            );
                        }
                        return null;
                    }) }
                </Modal>
            </SelectWrapper>
        </div>
    );
};

export default SelectBox;
