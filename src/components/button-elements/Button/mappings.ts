import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes } from '@common/common-types';

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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'hover:bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'hover:bg-blue-700',
            focusRingColor:'focus:ring-blue-500'
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
