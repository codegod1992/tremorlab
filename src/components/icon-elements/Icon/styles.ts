import {
    BaseColors,
    Sizing,
    border,
    borderRadius,
    defaultColors,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing,
} from 'lib';

export type WrapperProporionTypes = {
    paddingLeft: string,
    paddingRight: string,
    paddingTop: string,
    paddingBottom: string,
}

export const wrapperProportions: {[size: string]: WrapperProporionTypes} = {
    xs: {
        paddingLeft: spacing.xs.paddingLeft,
        paddingRight: spacing.xs.paddingRight,
        paddingTop: spacing.xs.paddingTop,
        paddingBottom: spacing.xs.paddingBottom,
    },
    sm: {
        paddingLeft: spacing.xs.paddingLeft,
        paddingRight: spacing.xs.paddingRight,
        paddingTop: spacing.xs.paddingTop,
        paddingBottom: spacing.xs.paddingBottom,
    },
    md: {
        paddingLeft: spacing.sm.paddingLeft,
        paddingRight: spacing.sm.paddingRight,
        paddingTop: spacing.sm.paddingTop,
        paddingBottom: spacing.sm.paddingBottom,
    },
    lg: {
        paddingLeft: spacing.sm.paddingLeft,
        paddingRight: spacing.sm.paddingRight,
        paddingTop: spacing.sm.paddingTop,
        paddingBottom: spacing.sm.paddingBottom,
    },
    xl: {
        paddingLeft: spacing.md.paddingLeft,
        paddingRight: spacing.md.paddingRight,
        paddingTop: spacing.md.paddingTop,
        paddingBottom: spacing.md.paddingBottom,
    },
};

export const iconSizes: {[size: string]: Sizing} = {
    xs: {
        height: sizing.sm.height,
        width: sizing.sm.width,
    },
    sm: {
        height: sizing.lg.height,
        width: sizing.lg.width,
    },
    md: {
        height: sizing.lg.height,
        width: sizing.lg.width,
    },
    lg: {
        height: sizing.twoXl.height,
        width: sizing.twoXl.width,
    },
    xl: {
        height: sizing.threeXl.height,
        width: sizing.threeXl.width,
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
        rounded: borderRadius.lg.all,
        border: '',
        ring: '',
        shadow: '',
    },
    'shadow': {
        rounded: borderRadius.lg.all,
        border: border.sm.all,
        ring: '',
        shadow: 'shadow',
    },
    'solid': {
        rounded: borderRadius.lg.all,
        border: border.md.all,
        ring: 'ring-1',
        shadow: '',
    },
    'outlined': {
        rounded: borderRadius.lg.all,
        border: border.sm.all,
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
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).text).textColor,
            bgColor:'',
            borderColor: '',
            ringColor: '',
        }
    },
    'light': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).lightBackground).bgColor,
            borderColor: '',
            ringColor: '',
        }
    },
    'shadow': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).borderColor,
            ringColor: '',
        }
    },
    'solid': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(defaultColors['white']).textColor,
            bgColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).background).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(defaultColors['white']).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(defaultColors['lightBorder']).ringRolor,
        }
    },
    'outlined': {
        [BaseColors.Slate]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Slate).lightRing).ringRolor,
        },
        [BaseColors.Gray]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Gray).lightRing).ringRolor,
        },
        [BaseColors.Zinc]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Zinc).lightRing).ringRolor,
        },
        [BaseColors.Neutral]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Neutral).lightRing).ringRolor,
        },
        [BaseColors.Stone]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Stone).lightRing).ringRolor,
        },
        [BaseColors.Red]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Red).lightRing).ringRolor,
        },
        [BaseColors.Orange]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Orange).lightRing).ringRolor,
        },
        [BaseColors.Amber]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Amber).lightRing).ringRolor,
        },
        [BaseColors.Yellow]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Yellow).lightRing).ringRolor,
        },
        [BaseColors.Lime]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Lime).lightRing).ringRolor,
        },
        [BaseColors.Green]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Green).lightRing).ringRolor,
        },
        [BaseColors.Emerald]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Emerald).lightRing).ringRolor,
        },
        [BaseColors.Teal]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Teal).lightRing).ringRolor,
        },
        [BaseColors.Cyan]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Cyan).lightRing).ringRolor,
        },
        [BaseColors.Sky]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Sky).lightRing).ringRolor,
        },
        [BaseColors.Blue]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).lightRing).ringRolor,
        },
        [BaseColors.Indigo]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Indigo).lightRing).ringRolor,
        },
        [BaseColors.Violet]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Violet).lightRing).ringRolor,
        },
        [BaseColors.Purple]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Purple).lightRing).ringRolor,
        },
        [BaseColors.Fuchsia]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Fuchsia).lightRing).ringRolor,
        },
        [BaseColors.Pink]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Pink).lightRing).ringRolor,
        },
        [BaseColors.Rose]: { 
            textColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).text).textColor,
            bgColor: getColorVariantsFromColorThemeValue(defaultColors['white']).bgColor,
            borderColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).border).borderColor,
            ringColor: getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Rose).lightRing).ringRolor,
        }
    },
};
