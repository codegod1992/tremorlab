import React, { useEffect, useState } from 'react';

import { ChevronDownIcon, SearchIcon, XCircleIcon } from '@heroicons/react/solid';

import { classNames, parseMarginTopClassNames } from 'lib/classnameUtils';
import Modal from '@common/Modal';
import SelectText from '@common/SelectText';
import SelectWrapper from '@common/SelectWrapper';

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
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <SelectWrapper>
                <button
                    className="flex items-center justify-between rounded-md px-4 py-2
                    focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300 w-full"
                    onClick={ () => {setShowModal(true); console.log('clicked');} }
                >
                    
                    { selectedItemsValues.length !== 0 ? (
                        <SelectText text={ `${selectedItemsValues.length} Selected` } isActive={ true } />
                    ) : (
                        <SelectText text={ placeholder } isActive={ false } />
                    ) }
                    <div className="flex items-center">
                        <span className="sr-only">Remove all selected options</span>
                        { selectedItemsValues.length !== 0 ? (
                            <button onClick={ () => setSelectedItemsValues([]) }>
                                <XCircleIcon className="flex-none h-4 w-4 text-gray-400" aria-hidden="true" />
                            </button>
                        ) : null }
                        <ChevronDownIcon className="flex-none -mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
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
            </SelectWrapper>
        </div>
    );
};

export default MultiSelectBox;
