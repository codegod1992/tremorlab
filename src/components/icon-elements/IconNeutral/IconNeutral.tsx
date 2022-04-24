import React from 'react';

import { Colors, Sizes } from '@common/component-utils';
import { colorMapping, proportinsMapping, shapeMapping } from 'components/icon-elements/IconNeutral/mappings';
import { IconElementProps } from '../../common/component-utils';
import IconWrapper from '@common/IconWrapper';

const IconNeutral = ({
    Icon,
    size = Sizes.SM,
    color = Colors.Blue,
}: IconElementProps) => {
    return(
        <IconWrapper
            Icon = { Icon }
            { ...colorMapping[color] }
            { ...proportinsMapping[size] }
            { ...shapeMapping }
        />
    );
};

export default IconNeutral;
