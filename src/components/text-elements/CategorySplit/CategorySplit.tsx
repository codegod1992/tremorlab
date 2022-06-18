import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import { BaseColors } from '@utils/objects';

interface CategoryProps {
    name: string,
    value: string,
    context: string,
    color?: string,
}

export interface CategorySplitProps extends BaseComponentProps {
    firstCategory: CategoryProps,
    secondCategory: CategoryProps,
    textColor: string
}

const LeftCategoryBlock = ({
    name,
    value,
    context,
    color = BaseColors.Blue,
}: CategoryProps) => {
    return(
        <>
            <div className={ classNames(
                getColorVariantsFromColorThemeValue(colorTheme[color].darkText).borderColor,
                'border-l-2 text-base'
            ) }
            >
                <p className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    'ml-4 text-left'
                ) }
                >
                    { name }
                </p>
                <div className={ classNames(
                    'ml-4',
                    getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                )}
                >
                    <span className={ classNames(
                        'mr-2 font-semibold'
                    ) }
                    >
                        { value }
                    </span>
                    <span className={ classNames(
                        'font-normal opacity-80'
                    ) }
                    >
                        { context }
                    </span>
                </div>
            </div>
        </>
    );
};

const RightCategoryBlock = ({
    name,
    value,
    context,
    color = BaseColors.Slate,
}: CategoryProps) => {
    return(
        <>
            <div className={ classNames(
                getColorVariantsFromColorThemeValue(colorTheme[color].darkBorder).borderColor,
                'border-r-2 text-base'
            ) }
            >
                <p className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    'mr-4 text-right'
                ) }
                >
                    { name }
                </p>
                <div className={classNames(
                    'mr-4',
                    getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                )}
                >
                    <span className="mr-2 font-semibold">
                        { value }
                    </span>
                    <span className="font-normal opacity-80">
                        { context }
                    </span>
                </div>
            </div>
        </>
    );
};

const CategorySplit = ({
    firstCategory,
    secondCategory,
    marginTop,
}: CategorySplitProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop), 'flex justify-between') }>
            <LeftCategoryBlock {...firstCategory} />
            <RightCategoryBlock {...secondCategory} />
        </div>
    );
};

export default CategorySplit;
