import React, { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { useOnClickOutside } from '@utils/utils';

export interface DropdownProps {
    placeholder?: string,
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[],
}

const Dropwdown = ({
    placeholder = 'Select',
    defaultValue = null,
    handleSelect = (value: any) => { value; },
    children,
}: DropdownProps) => {

    const [dropdownText, setDropdownText] = useState(null);
    const [activeDropdownItem, setActiveDropdownItem] = useState(defaultValue);

    const [showModal, setShowModal] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setShowModal(false));

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
            setShowModal(false);
            setActiveDropdownItem(shortcutMapping[keyLower].value);
            setDropdownText(shortcutMapping[keyLower].name);
            handleSelect(shortcutMapping[keyLower].value);
        }
    };

    useEffect(() => {
        consturctShortcutMapping();
        document.addEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));

        return () => {
            document.removeEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));
        };
    }, []);

    return(
        <>
            <button
                className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm
                           font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-opacity-100
                           focus:outline-none focus:ring-blue-300"
                onClick={() => setShowModal(true)}
            >
                { dropdownText ? dropdownText : placeholder }
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
            { showModal ? (
                <div
                    ref={ ref }
                    className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y
                            divide-gray-100 focus:outline-none"
                >
                    { React.Children.map(children, (child: React.ReactElement) => (
                        <>
                            { React.cloneElement(child, {
                                handleClick: child.props.handleClick ? child.props.handleClick : handleSelect,
                                setDropdownText: setDropdownText,
                                setActiveDropdownItem: setActiveDropdownItem,
                                setShowModal: setShowModal,
                                isActive: child?.props.value === activeDropdownItem,
                            }) }
                        </>
                    )) }
                </div>
            ) : null }
        </>
    );
};

export default Dropwdown;
