import React from 'react';

import { Colors, Sizes } from '@utils/objects';
import { colorMapping, proportinsMapping, shapeMapping } from './mappings';
import IconWrapper from './IconWrapper';

export const IconTypes = {
    Simple: 'simple',
    Light: 'light',
    Shadow: 'shadow',
    Solid: 'solid',
    Circled: 'circled'
};

export interface IconProps {
    Icon: React.ElementType,
    style?: string,
    info?: string,
    size?: string
    color?: string
}

const Icon = ({
    Icon,
    style = IconTypes.Simple,
    info,
    size = Sizes.SM,
    color = Colors.Blue,
}: IconProps) => {
    return(
        <IconWrapper
            Icon = { Icon }
            info={ info }
            { ...colorMapping[style][color] }
            { ...proportinsMapping[size] }
            { ...shapeMapping[style] }
        />
    );
};

export default Icon;
