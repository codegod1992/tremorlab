import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import { colorMapping, proportinsMapping, shapeMapping } from './mappings';
import BaseComponentProps from '@common/BaseComponentInterface';
import IconWrapper from './IconWrapper';

export const IconVariants = {
    Simple: 'simple',
    Light: 'light',
    Shadow: 'shadow',
    Solid: 'solid',
    Outlined: 'outlined'
};

export interface IconProps extends BaseComponentProps {
    Icon: React.ElementType,
    variant?: string,
    info?: string,
    size?: string
    color?: string
}

const Icon = ({
    Icon,
    variant = IconVariants.Simple,
    info,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop,
}: IconProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <IconWrapper
                Icon = { Icon }
                info={ info }
                { ...colorMapping[variant][color] }
                { ...shapeMapping[variant] }
                { ...proportinsMapping[size] }
            />
        </div>
    );
};

export default Icon;
