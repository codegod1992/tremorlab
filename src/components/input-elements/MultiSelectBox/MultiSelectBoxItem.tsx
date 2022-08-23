import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colors';
import { isValueInArray, removeValueFromArray } from 'lib/utils';
import { BaseColors } from 'lib/primitives';
import { fontSize } from 'lib/text';
import { spacing } from 'lib/spacing';

export interface MultiSelectBoxItemProps {
    value: any,
    name: string,
    privateProps?: {
        selectedItemsValues: any[],
        setSelectedItemsValues: React.Dispatch<React.SetStateAction<any[]>>,
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
            let newSelectedItemsValues = [];
            if (!isValueInArray(value, privateProps!.selectedItemsValues!)) {
                newSelectedItemsValues = [...privateProps!.selectedItemsValues!, value];
                privateProps!.setSelectedItemsValues!([...newSelectedItemsValues]);
            } else {
                newSelectedItemsValues = removeValueFromArray(value, privateProps!.selectedItemsValues!);
                privateProps!.setSelectedItemsValues!([...newSelectedItemsValues!]);
            }
            privateProps!.handleSelect(newSelectedItemsValues);
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
                checked={ isValueInArray(value, privateProps!.selectedItemsValues!) }
                readOnly={ true }
            />
            <p className="whitespace-nowrap truncate">{ name }</p>
        </div>
    </button>
);

export default MultiSelectBoxItem;
