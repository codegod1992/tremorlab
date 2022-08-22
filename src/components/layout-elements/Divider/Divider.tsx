import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colors';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

const Divider = () => (
    <div className={ classNames(
        'w-full mx-auto rounded-lg',
        getColorVariantsFromColorThemeValue(defaultColors.background).bgColor,
        sizing.threeXs.height,
        spacing.threeXl.marginTop,
        spacing.threeXl.marginBottom,
    ) }
    />
);

export default Divider;
