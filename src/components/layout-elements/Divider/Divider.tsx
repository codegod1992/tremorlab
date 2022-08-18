import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from '@utils/classnameUtils';
import { defaultColors } from '@utils/colorTheme';

const Divider = () => (
    <div className={ classNames(
        'h-0.5 my-6 w-full mx-auto',
        getColorVariantsFromColorThemeValue(defaultColors.background).bgColor,
    ) }
    />
);

export default Divider;
