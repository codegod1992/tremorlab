import React, { useEffect, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, parseMarginTopClassNames } from 'lib/classnameUtils';
import Modal from 'components/interaction-elements/common/Modal';
import SelectText from '../common/SelectText';
import SelectWrapper from '../common/SelectWrapper';

export interface DropdownProps {
    placeholder?: string,
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    marginTop?: string,
    children: React.ReactElement[],
}

const Dropwdown = ({
    placeholder = 'Select...',
    defaultValue = null,
    handleSelect = (value: any) => { value; },
    marginTop,
    children,
}: DropdownProps) => {
    const [showModal, setShowModal] = useState(false);

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
            if (child.props.shortcut) {
                shortcutMapping[child.props.shortcut.toLowerCase()] = {
                    value: child.props.value,
                    name: child.props.name,
                };
            }
        });
    };

    const handleKeyDown = (event: KeyboardEvent, shortcutMapping: ShortcutMapping) => {
        const keyLower = event.key.toLocaleLowerCase();
        if (Object.keys(shortcutMapping).includes(keyLower)) {
            setSelectedItem(shortcutMapping[keyLower].value);
            handleSelect(selectedItem);
            setShowModal(false);
        }
    };

    useEffect(() => {
        consturctShortcutMapping();

        document.addEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));

        return () => {
            document.removeEventListener('keydown', (e) => handleKeyDown(e, shortcutMapping));
        };
    }, [selectedItem]);

    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <SelectWrapper>
                <button
                    className={ classNames(
                        'flex justify-between items-center w-full h-full rounded-md',
                        'px-4 py-2',
                        'focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300',
                    ) }
                    onClick={ () => setShowModal(true) }
                >
                    { selectedItem ? (
                        <SelectText isActive={ true } text={ valueToNameMapping[selectedItem] } />
                    ) : (
                        <SelectText isActive={ false } text={ placeholder } />
                    ) }
                    <ChevronDownIcon className="flex-none -mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
                <Modal showModal={ showModal } setShowModal={ setShowModal }>
                    { React.Children.map(children, (child: React.ReactElement) => (
                        <>
                            { React.cloneElement(child, {
                                privateProps: {
                                    setSelectedItem: setSelectedItem,
                                    isActive: child?.props.value === selectedItem,
                                    handleSelect: handleSelect,
                                    setShowModal: setShowModal,
                                },
                            }) }
                        </>
                    )) }
                </Modal>
            </SelectWrapper>
        </div>
    );
};

export default Dropwdown;
