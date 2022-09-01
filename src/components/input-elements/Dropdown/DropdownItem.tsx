import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colors';
import { fontSize } from 'lib/font';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

export interface DropdownItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    privateProps?: {
        isActive: boolean,
        handleDropdownItemClick: (value: any) => void,
    }
}

const DropdownItem = ({
    value,
    name,
    Icon,
    privateProps,
}: DropdownItemProps) => (
    <button
        onClick={ () => privateProps!.handleDropdownItemClick(value) }
        className={ classNames(
            'flex items-center justify-between w-full',
            spacing.twoXl.paddingLeft,
            spacing.twoXl.paddingRight,
            spacing.md.paddingTop,
            spacing.md.paddingBottom,
            fontSize.sm,
            privateProps!.isActive
                ? classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.darkestText).textColor,
                )
                : classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.lightBackground).hoverBgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                )
        ) }
    >
        <div className="flex items-center truncate">
            { Icon ? (
                <Icon className={ classNames(
                    'flex-none',
                    sizing.lg.height,
                    sizing.lg.width,
                    spacing.lg.marginRight,
                    getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                ) } aria-hidden="true" />
            ) : null }
            <p className="whitespace-nowrap truncate">
                { name }
            </p>
        </div>
    </button>
);

export default DropdownItem;
