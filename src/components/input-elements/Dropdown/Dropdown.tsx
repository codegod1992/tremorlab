import React, { useEffect, useState } from 'react';

import { ArrowDownHeadIcon } from 'assets';

import {
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';
import Modal from 'components/layout-elements/Modal';
import { TwMarginTop } from '../../../lib';

export interface DropdownProps {
    placeholder?: string,
    defaultValue?: any,
    handleSelect?: { (value: any): void },
    marginTop?: TwMarginTop,
    children: React.ReactElement[],
}

const Dropwdown = ({
    placeholder = 'Select...',
    defaultValue = null,
    handleSelect = (value: any) => { value; },
    marginTop = 'mt-0',
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
            'relative w-full min-w-[10rem] rounded-md shadow-sm border',
            getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
            marginTop,
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
                    fontSize.sm,
                    fontWeight.md,
                    selectedItem
                        ? getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor
                        : getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                ) }>
                    { selectedItem ? valueToNameMapping[selectedItem] : placeholder }
                </p>
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
