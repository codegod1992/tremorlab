import { Color, Size } from './inputTypes';

export const DeltaTypes: {[key: string]: string} = {
    Increase: 'increase',
    ModerateIncrease: 'moderateIncrease',
    Decrease: 'decrease',
    ModerateDecrease: 'moderateDecrease',
    Unchanged: 'unchanged'
};

export const BaseColors: {[key: string]: Color} = {
    Slate: 'slate',
    Gray: 'gray',
    Zinc: 'zinc',
    Neutral: 'neutral',
    Stone: 'stone',
    Red: 'red',
    Orange: 'orange',
    Amber: 'amber',
    Yellow: 'yellow',
    Lime: 'lime',
    Green: 'green',
    Emerald: 'emerald',
    Teal: 'teal',
    Cyan: 'cyan',
    Sky: 'sky',
    Blue: 'blue',
    Indigo: 'indigo',
    Violet: 'violet',
    Purple: 'purple',
    Fuchsia: 'fuchsia',
    Pink: 'pink',
    Rose: 'rose'
};

export const SizeTypes: {[key: string]: Size} = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
};

export const ImportanceTypes: {[key: string]: string} = {
    Primary: 'primary',
    Secondary: 'secondary',
};

export const HorizontalPositionTypes: {[key: string]: string} = {
    Left: 'left',
    Right: 'right',
};

export const VerticalPositionTypes: {[key: string]: string} = {
    Top: 'top',
    Bottom: 'bottom',
};
