import React from 'react';

import { 
    borderRadius,
    classNames,
    defaultColors,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';

const Divider = () => (
    <div className={ classNames(
        'w-full mx-auto',
        getColorVariantsFromColorThemeValue(defaultColors.background).bgColor,
        sizing.threeXs.height,
        spacing.threeXl.marginTop,
        spacing.threeXl.marginBottom,
        borderRadius.lg.all,
    ) }
    />
);

export default Divider;
