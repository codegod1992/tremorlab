import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, SearchIcon, XCircleIcon, XIcon, } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { removeValueFromArray, useOnClickOutside } from '@utils/utils';
import { defaultColors } from '@utils/colorTheme';

export interface MultiSelectBoxProps {
    defaultValues?: any[],
    handleSelect?: { (value: any): void },
    placeholder?: string,
    modalAlignment?: string,
    children: React.ReactElement[],
}

const MultiSelectBox = ({
    defaultValues = [],
    handleSelect = (value) => null,
    placeholder = 'Select',
    modalAlignment = 'left',
    children,
}: MultiSelectBoxProps) => {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setShowModal(false));
    
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
        if (selectedItemsValues) {
            if(handleSelect) handleSelect(selectedItemsValues);
            setShowModal(false);
        }
    }, [selectedItemsValues]);

    return (
        <>
            <button
                className="relative flex items-center justify-between rounded-md border border-gray-300 pl-4
                    pr-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2
                    focus:ring-opacity-100 focus:outline-none focus:ring-blue-300 min-w-[10rem] w-full"
                onClick={ () => {setShowModal(true); console.log('clicked');} }
            >
                <div className="flex items-center space-x-2 overflow-x-auto">
                    { selectedItemsValues.length !== 0 ? (
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">{ selectedItemsValues.length }</span>
                            <span>Selected</span>
                        </div>
                    ) : (
                        <span className={
                            classNames(getColorVariantsFromColorThemeValue(defaultColors.text).textColor)
                        }>
                            { placeholder }
                        </span>
                    ) }
                </div>
                <div className="flex items-center ml-2 space-x-1.5">
                    <span className="sr-only">Remove all selected options</span>
                    { selectedItemsValues.length !== 0 ? (
                        <button onClick={ () => setSelectedItemsValues([]) }>
                            <XCircleIcon className="flex-none h-4 w-4 text-gray-400" aria-hidden="true" />
                        </button>
                    ) : null }
                    <ChevronDownIcon className="flex-none h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                { showModal ? (
                    <div
                        ref={ ref }
                        className={ classNames(
                            'absolute py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y',
                            'divide-gray-100 focus:outline-none -bottom-2 translate-y-full',
                            'max-h-72 overflow-y-auto w-full z-10',
                            modalAlignment === 'left' ? 'left-0' : 'right-0'
                        ) }
                    >
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
                                                selectedItemsValues: selectedItemsValues,
                                                setSelectedItemsValues: setSelectedItemsValues,
                                            }) }
                                        </>
                                    );
                                }
                            }) }
                        </div>
                    </div>
                ) : null }
            </button>
        </>
    );
};

export default MultiSelectBox;
