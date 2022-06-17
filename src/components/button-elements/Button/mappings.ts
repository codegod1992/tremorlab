/* eslint-disable max-len */
import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes } from '@common/common-types';
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

export const buttonColors: {[baseColor: string]:  {[importance: string]: ButtonColorTypes}} = {
    'slate': {
        'primary': {
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            hoverTextColor: '',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].background).bgColor,
            hoverBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBackground).hoverBgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).borderColor,
            hoverBorderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBackground).hoverBorderColor,
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
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
            focusRingColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].ring).focusRingColor,
        },
        'secondary': {
            textColor: 'text-blue-600',
            hoverTextColor: 'hover:text-white',
            bgColor: 'bg-transparent',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'hover:border-blue-700',
            focusRingColor: 'focus:ring-blue-500'
        }
    }
};
