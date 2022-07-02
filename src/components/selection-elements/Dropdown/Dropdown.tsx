import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import Modal from '@common/Modal';
import { useOnClickOutside } from '@utils/utils';

export interface DropdownProps extends BaseComponentProps {
    placeholder?: string,
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[],
}

const Dropwdown = ({
    placeholder = 'Select',
    defaultValue = null,
    handleSelect = (value: any) => { value; },
    marginTop,
    children,
}: DropdownProps) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(modalRef, () => setShowModal(false));

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

    const [selectedItem, setSelectedItem] = useState(defaultValue);

    type ShortcutMapping = {
        [shortcut: string]: any
    }
    const shortcutMapping: ShortcutMapping = {};
    const consturctShortcutMapping = () => {
        React.Children.map(children, (child) => {
            shortcutMapping[child.props.shortcut.toLowerCase()] = {
                value: child.props.value,
                name: child.props.name,
            };
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent, shortcutMapping: ShortcutMapping) => {
        const keyLower = event.key.toLocaleLowerCase();
        if (Object.keys(shortcutMapping).includes(keyLower)) {
            setSelectedItem(shortcutMapping[keyLower].value);
        }
    };

    useEffect(() => {
        consturctShortcutMapping();

        if (selectedItem) {
            if(handleSelect) {
                handleSelect(selectedItem);
            }
            setShowModal(false);
        }

        document.addEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));

        return () => {
            document.removeEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));
        };
    }, [selectedItem]);

    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <button
                className={ classNames(
                    selectedItem ? 'text-gray-700' : 'text-gray-500',
                    'relative inline-flex justify-between rounded-md border border-gray-300 px-4 py-2 bg-white',
                    'text-sm font-medium shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-opacity-100',
                    'focus:outline-none focus:ring-blue-300 button-dropdown w-full',
                    'min-w-[10rem]'
                ) }
                onClick={ () => setShowModal(true) }
            >
                { selectedItem ? (
                    <span className="whitespace-nowrap truncate">{ valueToNameMapping[selectedItem] }</span>
                ) : placeholder }
                <ChevronDownIcon className="flex-none -mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <Modal ref={ modalRef } showModal={ showModal }>
                    { React.Children.map(children, (child: React.ReactElement) => (
                        <>
                            { React.cloneElement(child, {
                                setSelectedItem: setSelectedItem,
                                isActive: child?.props.value === selectedItem,
                            }) }
                        </>
                    )) }
                </Modal>
            </button>
        </div>
    );
};

export default Dropwdown;
