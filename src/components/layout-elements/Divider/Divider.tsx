import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

const Divider = () => (
    <div className={ classNames(
        'h-0.5 my-6 w-full mx-auto',
        getColorVariantsFromColorThemeValue(defaultColors.background).bgColor,
    ) }
    />
);

export default Divider;
