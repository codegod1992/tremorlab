import React from 'react';

import {
    BaseColors,
    classNames,
    colorTheme,
    defaultColors,
    fontSize,
    getColorVariantsFromColorThemeValue,
    isValueInArray,
    removeValueFromArray,
    spacing
} from 'lib';

export interface MultiSelectBoxItemProps {
    value: any,
    name: string,
    privateProps?: {
        selectedItems: any[],
        setSelectedItems: React.Dispatch<React.SetStateAction<any[]>>,
        handleSelect: { (value: any): void },
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    },
}

const MultiSelectBoxItem = ({
    value,
    name,
    privateProps,
}: MultiSelectBoxItemProps) => (
    <button
        onClick={ () => {
            let newSelectedItems = [];
            if (!isValueInArray(value, privateProps!.selectedItems!)) {
                newSelectedItems = [...privateProps!.selectedItems!, value];
                privateProps!.setSelectedItems!([...newSelectedItems]);
            } else {
                newSelectedItems = removeValueFromArray(value, privateProps!.selectedItems!);
                privateProps!.setSelectedItems!([...newSelectedItems!]);
            }
            privateProps!.handleSelect(newSelectedItems);
        } }
        className={ classNames(
            'flex items-center justify-between w-full',
            spacing.twoXl.paddingLeft,
            spacing.twoXl.paddingRight,
            spacing.md.paddingTop,
            spacing.md.paddingBottom,
            fontSize.sm,
            getColorVariantsFromColorThemeValue(defaultColors.lightBackground).hoverBgColor,
            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
        ) }
    >
        <div className="flex items-center truncate">
            <input
                type="checkbox"
                className={ classNames(
                    'flex-none focus:ring-none focus:outline-none border rounded cursor-pointer',
                    getColorVariantsFromColorThemeValue(defaultColors.lightRing).focusRingColor,
                    getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
                    getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                    spacing.lg.marginRight,
                ) }
                checked={ isValueInArray(value, privateProps!.selectedItems!) }
                readOnly={ true }
            />
            <p className="whitespace-nowrap truncate">{ name }</p>
        </div>
    </button>
);

export default MultiSelectBoxItem;
