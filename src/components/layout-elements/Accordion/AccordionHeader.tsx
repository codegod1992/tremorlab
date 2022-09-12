import React from 'react';

import { ArrowDownHeadIcon, ArrowUpHeadIcon } from 'assets';
import { classNames, defaultColors, getColorVariantsFromColorThemeValue, sizing, spacing } from 'lib';

export interface AccordionHeaderProps {
    privateProps?: {
        isExpanded: boolean,
        setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    }
    children: React.ReactNode;
}

const AccordionHeader = ({
    privateProps,
    children
}: AccordionHeaderProps) => {
    return(
        <button
            className={ classNames(
                'w-full flex items-center justify-between',
                spacing.threeXl.paddingLeft,
                spacing.threeXl.paddingRight,
                spacing.lg.paddingTop,
                spacing.lg.paddingBottom,
            ) }
            onClick={ () => privateProps!.setExpanded(!privateProps!.isExpanded) }
        >
            <div className={ classNames(
                'flex flex-1',
                spacing.threeXl.marginRight,
            ) }>
                { children }
            </div>
            <div>
                { privateProps!.isExpanded
                    ? (
                        <ArrowUpHeadIcon
                            className={ classNames(
                                getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
                                spacing.twoXs.negativeMarginRight,
                                sizing.xl.height,
                                sizing.xl.width,
                            ) }
                        />
                    )
                    : <ArrowDownHeadIcon className="text-gray-400 -mr-1 h-6 w-6" /> }
            </div>
        </button>
    );
};

export default AccordionHeader;
