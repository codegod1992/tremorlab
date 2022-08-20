import React, { useEffect, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import Modal from 'components/input-elements/common/Modal';
import { defaultColors } from 'lib/colorTheme';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

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
        <div className={ classNames(
            'relative',
            parseMarginTopClassNames(marginTop),
        ) }>
            <button
                className={ classNames(
                    'flex justify-between items-center w-full min-w-[10rem] rounded-md shadow-sm border',
                    'focus:ring-2 focus:outline-none',
                    getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
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
                    fontSize.sm,
                    fontWeight.md,
                    selectedItem
                        ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                        : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                ) }>
                    { selectedItem ? valueToNameMapping[selectedItem] : placeholder }
                </p>
                <span>
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
                </span>
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
        </div>
    );
};

export default Dropwdown;
