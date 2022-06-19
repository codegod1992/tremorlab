/* eslint-disable max-len */
import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes, IconProportionTypes } from '@common/common-types';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import { BaseColors } from '@utils/objects';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        paddingX: 'px-2.5',
        paddingY: 'py-1.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-base',
    },
    lg: {
        paddingX: 'px-4',
        paddingY: 'py-2.5',
        textSize: 'text-lg',
    },
};

export const buttonShape: ButtonShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border',
    shadow: 'shadow-sm'
};

export const iconProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-6 h-6',
    },
};


export const buttonColors: {[baseColor: string]:  {[importance: string]: ButtonColorTypes}} = {
    'slate': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].ring).focusRingColor,
        }
    },
    'gray': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].ring).focusRingColor,
        }
    },
    'zinc': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].ring).focusRingColor,
        }
    },
    'neutral': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].ring).focusRingColor,
        }
    },
    'stone': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].ring).focusRingColor,
        }
    },
    'red': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].ring).focusRingColor,
        }
    },
    'orange': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].ring).focusRingColor,
        }
    },
    'amber': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].ring).focusRingColor,
        }
    },
    'yellow': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].ring).focusRingColor,
        }
    },
    'lime': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].ring).focusRingColor,
        }
    },
    'green': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].ring).focusRingColor,
        }
    },
    'emerald': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].ring).focusRingColor,
        }
    },
    'teal': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].ring).focusRingColor,
        }
    },
    'cyan': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].ring).focusRingColor,
        }
    },
    'sky': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].ring).focusRingColor,
        }
    },
    'blue': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        }
    },
    'indigo': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        }
    },
    'violet': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].ring).focusRingColor,
        }
    },
    'purple': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].ring).focusRingColor,
        }
    },
    'fuchsia': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].ring).focusRingColor,
        }
    },
    'pink': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].ring).focusRingColor,
        }
    },
    'rose': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].ring).focusRingColor,
        },
        'secondary': {
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            hoverTextColor: getColorVariantsFromColorThemeValue(defaultColors['white']).hoverTextColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].border).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkBorder).borderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].ring).focusRingColor,
        }
    }
};
