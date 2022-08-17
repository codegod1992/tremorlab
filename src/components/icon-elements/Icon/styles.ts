import colorTheme, { defaultColors } from '@utils/colorTheme';

import { BaseColors } from '@utils/objects';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type ProporionTypes = {
    paddingX: string,
    paddingY: string,
    iconSize: string,
}

export const proportions: {[size: string]: ProporionTypes} = {
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

export type ShapeTypes = {
    rounded: string,
    border: string,
    ring: string,
    shadow: string
}

export const shape: {[style: string]: ShapeTypes} = {
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
    'outlined': {
        rounded: 'rounded-lg',
        border: 'border',
        ring: 'ring-2',
        shadow: '',
    },
};

export type ColorTypes = {
    textColor: string,
    bgColor: string,
    borderColor: string,
    ringColor: string,
}

export const colors: {[style: string]: {[baseColor: string]: ColorTypes}} = {
    'simple': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        }
    },
    'light': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        }
    },
    'shadow': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        }
    },
    'solid': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        }
    },
    'outlined': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightRing).ringRolor,
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightRing).ringRolor,
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightRing).ringRolor,
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightRing).ringRolor,
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightRing).ringRolor,
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightRing).ringRolor,
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightRing).ringRolor,
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightRing).ringRolor,
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightRing).ringRolor,
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightRing).ringRolor,
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightRing).ringRolor,
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightRing).ringRolor,
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightRing).ringRolor,
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightRing).ringRolor,
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightRing).ringRolor,
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightRing).ringRolor,
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightRing).ringRolor,
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightRing).ringRolor,
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightRing).ringRolor,
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightRing).ringRolor,
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightRing).ringRolor,
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightRing).ringRolor,
        }
    },
};
