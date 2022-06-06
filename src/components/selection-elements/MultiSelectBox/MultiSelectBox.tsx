import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon, XCircleIcon, XIcon, } from '@heroicons/react/solid';

import { removeValueFromArray, useOnClickOutside } from '@utils/utils';

interface SelectedItemBadgeProps {
    name: string,
    value: number,
    selectedItemsValues: any[],
    setSelectedItemsValues: React.Dispatch<React.SetStateAction<any[]>>,
}

const SelectedItemBadge = ({
    name,
    value,
    selectedItemsValues,
    setSelectedItemsValues,
}: SelectedItemBadgeProps) => (
    <span className="inline-flex rounded items-center py-0.5 pl-2 pr-1 sm:text-sm bg-blue-100 text-blue-500">
        { name }
        <button
            type="button"
            className="flex-shrink-0 ml-2 h-4 w-4 inline-flex rounded-full items-center justify-center text-blue-500"
            onClick={ () => { setSelectedItemsValues(removeValueFromArray(value, selectedItemsValues)) }}
        >
            <XIcon className="h-4 w-4 text-blue-500" aria-hidden="true" />
        </button>
    </span>
);

export interface MultiSelectBoxProps {
    defaultValues?: any[],
    handleSelect?: { (value: any): void },
    children: React.ReactElement[],
}

const MultiSelectBox = ({
    defaultValues = [],
    handleSelect,
    children,
}: MultiSelectBoxProps) => {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setShowModal(false));
    
    const [selectedItemsValues, setSelectedItemsValues] = useState(defaultValues);

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

    return (
        <>
            <button
                before="button-multiselectbox"
                className="flex items-center justify-between rounded-md border border-gray-300 pl-4 h-8 bg-white
                    text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-opacity-100
                    focus:outline-none focus:ring-blue-300"
                onClick={ () => setShowModal(true) }
            >
                <div className="flex items-center space-x-2">
                    {
                        selectedItemsValues.length !== 0 ? selectedItemsValues.map((itemValue) => (
                            <SelectedItemBadge
                                name={ valueToNameMapping[itemValue] }
                                value={ itemValue }
                                selectedItemsValues={ selectedItemsValues }
                                setSelectedItemsValues={ setSelectedItemsValues }
                            />
                        )) : <div className="w-32 h-full" />
                    }
                </div>
                <div className="flex items-center space-x-1.5">
                    <span className="sr-only">Remove all selected options</span>
                    <button onClick={ () => setSelectedItemsValues([]) }>
                        <XCircleIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    </button>
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </button>
            { showModal ? (
                <div
                    ref={ ref }
                    className="before:button-multiselectbox absolute w-56 rounded-md shadow-lg bg-white ring-1 
                        ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none mt-10"
                >
                    { React.Children.map(children, (child) => (
                        <>
                            { React.cloneElement(child, {
                                selectedItemsValues: selectedItemsValues,
                                setSelectedItemsValues: setSelectedItemsValues,
                                setShowModal: setShowModal,
                            }) }
                        </>
                    )) }
                </div>
            ) : null }
        </>
    );
};

export default MultiSelectBox;
