import React from 'react';

import { 
    classNames,
    defaultColors,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';

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
