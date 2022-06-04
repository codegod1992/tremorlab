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

export const OrientationTypes = {
    Horizontal: 'horizontal',
    Vertical: 'Vertical',
};
