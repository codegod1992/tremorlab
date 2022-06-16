import colorTheme from '@utils/colorTheme';

import { BaseColors } from '@utils/objects';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type IconElementProporions = {
    paddingX: string,
    paddingY: string,
    iconSize: string,
}

export const proportinsMapping: {[size: string]: IconElementProporions} = {
    xs: {
        paddingX: 'px-1.5',
        paddingY: 'py-1.5',
        iconSize: 'w-3 h-3',
    },
    sm: {
        paddingX: 'px-1.5',
        paddingY: 'py-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        paddingX: 'px-2',
        paddingY: 'py-2',
        iconSize: 'w-5 h-5',
    },
    lg: {
        paddingX: 'px-2',
        paddingY: 'py-2',
        iconSize: 'w-7 h-7',
    },
    xl: {
        paddingX: 'px-2.5',
        paddingY: 'py-2.5',
        iconSize: 'w-9 h-9',
    },
};

export type IconElementShapeTypes = {
    rounded: string,
    border: string,
    ring: string,
    shadow: string
}

export const shapeMapping: {[style: string]: IconElementShapeTypes} = {
    'simple': {
        rounded: '',
        border: '',
        ring: '',
        shadow: '',
    },
    'light': {
        rounded: 'rounded-lg',
        border: '',
        ring: '',
        shadow: '',
    },
    'shadow': {
        rounded: 'rounded-lg',
        border: 'border',
        ring: '',
        shadow: 'shadow',
    },
    'solid': {
        rounded: 'rounded-lg',
        border: 'border-2',
        ring: 'ring-1',
        shadow: '',
    },
    'circled': {
        rounded: 'rounded-lg',
        border: 'border',
        ring: 'ring-2',
        shadow: '',
    },
};

export type IconElementColorTypes = {
    textColor: string,
    bgColor: string,
    borderColor: string,
    ringColor: string,
}

export const colorMapping: {[style: string]: {[baseColor: string]: IconElementColorTypes}} = {
    'simple': {
        'slate': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'gray': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'zinc': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'neutral': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'stone': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'red': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'orange': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'amber': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'yellow': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'lime': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'green': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'emerald': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'teal': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'cyan': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'sky': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'blue': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'indigo': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'violet': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'purple': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'fuchsia': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'pink': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'rose': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        }
    },
    'light': {
        'slate': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'gray': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'zinc': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'neutral': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'stone': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'red': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'orange': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'amber': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'yellow': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'lime': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'green': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'emerald': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'teal': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'cyan': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'sky': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'blue': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'indigo': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'violet': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'purple': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'fuchsia': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'pink': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        'rose': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        }
    },
    'shadow': {
        'slate': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'gray': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'zinc': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'neutral': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'stone': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'red': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'orange': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'amber': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'yellow': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'lime': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'green': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'emerald': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'teal': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'cyan': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'sky': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'blue': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'indigo': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'violet': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'purple': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'fuchsia': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'pink': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'rose': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        }
    },
    'solid': {
        'slate': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'gray': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'zinc': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'neutral': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'stone': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'red': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'orange': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'amber': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'yellow': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'lime': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'green': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'emerald': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'teal': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'cyan': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'sky': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'blue': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'indigo': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'violet': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'purple': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'fuchsia': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'pink': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'rose': { 
            textColor: 'text-white',
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        }
    },
    'circled': {
        'slate': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightRing).ringRolor,
        },
        'gray': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightRing).ringRolor,
        },
        'zinc': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightRing).ringRolor,
        },
        'neutral': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightRing).ringRolor,
        },
        'stone': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightRing).ringRolor,
        },
        'red': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightRing).ringRolor,
        },
        'orange': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightRing).ringRolor,
        },
        'amber': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightRing).ringRolor,
        },
        'yellow': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightRing).ringRolor,
        },
        'lime': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightRing).ringRolor,
        },
        'green': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightRing).ringRolor,
        },
        'emerald': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightRing).ringRolor,
        },
        'teal': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightRing).ringRolor,
        },
        'cyan': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightRing).ringRolor,
        },
        'sky': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightRing).ringRolor,
        },
        'blue': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightRing).ringRolor,
        },
        'indigo': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightRing).ringRolor,
        },
        'violet': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightRing).ringRolor,
        },
        'purple': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightRing).ringRolor,
        },
        'fuchsia': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightRing).ringRolor,
        },
        'pink': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightRing).ringRolor,
        },
        'rose': { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: 'bg-white',
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightRing).ringRolor,
        }
    },
};
