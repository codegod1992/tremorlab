import React from 'react';

import { Colors, Sizes } from '@utils/component-utils';
import { colorMapping, proportinsMapping, shapeMapping } from 'components/icon-elements/IconShadow/mappings';
import { IconElementProps } from '../../../utils/component-utils';
import IconWrapper from '@common/IconWrapper';

const IconShadow = ({
    Icon,
    info,
    size = Sizes.SM,
    color = Colors.Blue,
}: IconElementProps) => {
    return(
        <IconWrapper
            Icon = { Icon }
            info={ info }
            { ...colorMapping[color] }
            { ...proportinsMapping[size] }
            { ...shapeMapping }
        />
    );
};

export default IconShadow;
