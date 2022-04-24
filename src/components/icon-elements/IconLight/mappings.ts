import { IconElementColorTypes, IconElementProporions, IconElementShapeTypes } from '@common/component-utils';

export const shapeMapping: IconElementShapeTypes = {
    rounded: 'rounded-lg',
    border: '',
    ring: '',
    shadow: '',
};

export const proportinsMapping: {[char: string]: IconElementProporions} = {
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
};

export const colorMapping: {[char: string]: IconElementColorTypes} = {
    'black': { 
        textColor: 'text-black',
        bgColor: 'bg-gray-100',
        borderColor: '',
        ringColor: '',
    },
    'slate': { 
        textColor: 'text-slate-500',
        bgColor: 'bg-slate-100',
        borderColor: '',
        ringColor: '',
    },
    'gray': { 
        textColor: 'text-gray-500',
        bgColor: 'bg-gray-100',
        borderColor: '',
        ringColor: '',
    },
    'zinc': { 
        textColor: 'text-zinc-500',
        bgColor: 'bg-zinc-100',
        borderColor: '',
        ringColor: '',
    },
    'neutral': { 
        textColor: 'text-neutral-500',
        bgColor: 'bg-neutral-500',
        borderColor: '',
        ringColor: '',
    },
    'stone': { 
        textColor: 'text-stone-500',
        bgColor: 'bg-stone-100',
        borderColor: '',
        ringColor: '',
    },
    'red': { 
        textColor: 'text-red-500',
        bgColor: 'bg-red-100',
        borderColor: '',
        ringColor: '',
    },
    'orange': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-orange-100',
        borderColor: '',
        ringColor: '',
    },
    'amber': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-amber-100',
        borderColor: '',
        ringColor: '',
    },
    'yellow': { 
        textColor: 'text-yellow-500',
        bgColor: 'bg-yellow-100',
        borderColor: '',
        ringColor: '',
    },
    'lime': { 
        textColor: 'text-lime-500',
        bgColor: 'bg-lime-100',
        borderColor: '',
        ringColor: '',
    },
    'green': { 
        textColor: 'text-green-500',
        bgColor: 'bg-green-100',
        borderColor: '',
        ringColor: '',
    },
    'emerald': { 
        textColor: 'text-emerald-500',
        bgColor: 'bg-emerald-100',
        borderColor: '',
        ringColor: '',
    },
    'teal': { 
        textColor: 'text-teal-500',
        bgColor: 'bg-teal-100',
        borderColor: '',
        ringColor: '',
    },
    'cyan': { 
        textColor: 'text-cyan-500',
        bgColor: 'bg-cyan-100',
        borderColor: '',
        ringColor: '',
    },
    'sky': { 
        textColor: 'text-sky-500',
        bgColor: 'bg-sky-100',
        borderColor: '',
        ringColor: '',
    },
    'blue': { 
        textColor: 'text-blue-500',
        bgColor: 'bg-blue-100',
        borderColor: '',
        ringColor: '',
    },
    'indigo': { 
        textColor: 'text-indigo-500',
        bgColor: 'bg-indigo-100',
        borderColor: '',
        ringColor: '',
    },
    'violet': { 
        textColor: 'text-violet-500',
        bgColor: 'bg-violet-100',
        borderColor: '',
        ringColor: '',
    },
    'purple': { 
        textColor: 'text-purple-500',
        bgColor: 'bg-purple-100',
        borderColor: '',
        ringColor: '',
    },
    'fuchsia': { 
        textColor: 'text-fuchsia-500',
        bgColor: 'bg-fuchsia-100',
        borderColor: '',
        ringColor: '',
    },
    'pink': { 
        textColor: 'text-pink-500',
        bgColor: 'bg-pink-100',
        borderColor: '',
        ringColor: '',
    },
    'rose': { 
        textColor: 'text-rose-500',
        bgColor: 'bg-rose-100',
        borderColor: '',
        ringColor: '',
    }
};
