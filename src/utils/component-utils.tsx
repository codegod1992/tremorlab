import React from 'react';

import ArrowDownLineIcon from 'remixicon-react/ArrowDownLineIcon';
import ArrowRightDownLineIcon from 'remixicon-react/ArrowRightDownLineIcon';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

export const DeltaTypes: {[key: string]: string} = {
    Increase: 'increase',
    ModerateIncrease: 'moderateIncrease',
    Decrease: 'decrease',
    ModerateDecrease: 'moderateDecrease',
    Unchanged: 'unchanged'
};

export const DeltaBgColors: {[key: string]: string} = {
    'increase': 'bg-emerald-500',
    'decrease': 'bg-rose-500'
};

export const DeltaTextColors: {[key: string]: string} = {
    'increase': 'bg-emerald-100',
    'moderateIncrease': 'bg-emerald-100',
    'decrease': 'bg-rose-100',
    'moderateDecrease': 'bg-rose-100',
    'unchanged': 'bg-orange-100',
};

export const DeltaIcons: {[key: string]: React.ElementType} = {
    'increase': ArrowUpLineIcon,
    'moderateIncrease': ArrowRightUpLineIcon,
    'decrease': ArrowDownLineIcon,
    'moderateDecrease': ArrowRightDownLineIcon,
    'unchanged': ArrowRightLineIcon,
};

export const Colors: {[key: string]: string} = {
    Black: 'black',
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

export const Sizes: {[key: string]: string} = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg'
};

export type BadgeProportions = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export type ButtonProportions = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export type ButtonShapeTypes = {
    rounded: string,
    border: string,
    shadow: string,
}

export type ButtonColorTypes = {
    textColor: string, 
    hoverTextColor: string,
    bgColor: string,
    hoverBgColor: string,
    borderColor: string,
    hoverBorderColor: string,
    focusRingColor: string,
}

export interface ButtonProps {
    text: string,
    size?: string,
    info?: string,
    arrow?: boolean,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
} 

export interface ButtonWithIconProps extends ButtonProps {
    Icon: React.ElementType,
} 

export type IconElementProporions = {
    paddingX: string,
    paddingY: string,
    iconSize: string,
}

export type IconElementShapeTypes = {
    rounded: string,
    border: string,
    ring: string,
    shadow: string
}

export type IconElementColorTypes = {
    textColor: string,
    bgColor: string,
    borderColor: string,
    ringColor: string,
}

export interface IconElementProps {
    Icon: React.ElementType,
    info?: string,
    size?: string
    color?: string
}

export type IconProportions = {
    margin?: string,
    iconSize: string,
}

export const mapInputsToDeltaType = (deltaType: string, isIncreasePositive: boolean): string => {
    if (isIncreasePositive || deltaType===DeltaTypes.Unchanged) {
        return deltaType;
    }
    switch (deltaType) {
    case DeltaTypes.Increase:
        return DeltaTypes.Decrease;
    case DeltaTypes.ModerateIncrease:
        return DeltaTypes.ModerateDecrease;
    case DeltaTypes.Decrease:
        return DeltaTypes.Increase;
    case DeltaTypes.ModerateDecrease:
        return DeltaTypes.ModerateIncrease;
    }
    return '';
};
