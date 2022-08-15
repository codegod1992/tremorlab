import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import { colorMapping, proportinsMapping, shapeMapping } from './mappings';
import IconWrapper from './IconWrapper';

export const IconVariants = {
    Simple: 'simple',
    Light: 'light',
    Shadow: 'shadow',
    Solid: 'solid',
    Outlined: 'outlined'
};

export interface IconProps {
    Icon: React.ElementType,
    variant?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    marginTop?: string,
}

const Icon = ({
    Icon,
    variant = IconVariants.Simple,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop,
}: IconProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <IconWrapper
                Icon = { Icon }
                tooltip={ tooltip }
                { ...colorMapping[variant][color] }
                { ...shapeMapping[variant] }
                { ...proportinsMapping[size] }
            />
        </div>
    );
};

export default Icon;
