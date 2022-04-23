import React from 'react';

import { classNames, parseBorderClassNames, parseTextColorClassNames } from '@utils/classname-utils';

interface CategoryProps {
    name: string,
    value: string,
    context?: string,
    textColor?: string,
    borderColor?: string
}

export interface CategorySplitProps {
    firstCategory: CategoryProps,
    secondCategory: CategoryProps,
    textColor: string
}

interface CategoryBlockProps extends CategoryProps {
    nameTextColor: string,
}

const LeftCategoryBlock = ({
    name,
    value,
    context,
    nameTextColor,
    textColor = 'text-green-600',
    borderColor = 'border-green-600'
}: CategoryBlockProps) => {
    return(
        <>
            <div className={ classNames(
                parseBorderClassNames(borderColor),
                'border-l-2'
            ) }
            >
                <p className={ classNames(
                    parseTextColorClassNames(nameTextColor),
                    'ml-4 text-base text-left'
                ) }
                >
                    { name }
                </p>
                <div className="ml-4">
                    <span className={ classNames(
                        parseTextColorClassNames(textColor),
                        'mr-1 text-base font-semibold'
                    ) }
                    >
                        { value }
                    </span>
                    <span className={ classNames(
                        parseTextColorClassNames(textColor),
                        'text-base font-normal tabular-nums'
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
    nameTextColor,
    textColor = 'text-gray-400',
    borderColor = 'border-gray-400'
}: CategoryBlockProps) => {
    return(
        <>
            <div className={ classNames(
                parseBorderClassNames(borderColor),
                'border-r-2'
            ) }
            >
                <p className={ classNames(
                    parseTextColorClassNames(nameTextColor),
                    'mr-4 text-base text-right'
                ) }
                >
                    { name }
                </p>
                <div className="mr-4">
                    <span className={ classNames(
                        parseTextColorClassNames(textColor),
                        'mr-1 text-base font-semibold'
                    ) }
                    >
                        { value }
                    </span>
                    <span className={ classNames(
                        parseTextColorClassNames(textColor),
                        'text-base font-normal'
                    ) }
                    >
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
    textColor = 'text-gray-600'
}: CategorySplitProps) => {
    return(
        <div className="flex justify-between">
            <LeftCategoryBlock {...firstCategory} nameTextColor={ textColor } />
            <RightCategoryBlock {...secondCategory} nameTextColor={ textColor } />
        </div>
    );
};

export default CategorySplit;
