import { IconElementColorTypes, IconElementProporions, IconElementShapeTypes } from '@common/component-utils';

export const shapeMapping: IconElementShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border',
    ring: 'ring-2',
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
        bgColor: 'bg-white',
        borderColor: 'border-black',
        ringColor: 'ring-gray-200',
    },
    'slate': { 
        textColor: 'text-slate-500',
        bgColor: 'bg-white',
        borderColor: 'border-slate-500',
        ringColor: 'ring-slate-200',
    },
    'gray': { 
        textColor: 'text-gray-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-500',
        ringColor: 'ring-gray-200',
    },
    'zinc': { 
        textColor: 'text-zinc-500',
        bgColor: 'bg-white',
        borderColor: 'border-zinc-500',
        ringColor: 'ring-zinc-200',
    },
    'neutral': { 
        textColor: 'text-neutral-500',
        bgColor: 'bg-white',
        borderColor: 'border-neutral-500',
        ringColor: 'ring-neutral-200',
    },
    'stone': { 
        textColor: 'text-stone-500',
        bgColor: 'bg-white',
        borderColor: 'border-stone-500',
        ringColor: 'ring-stone-200',
    },
    'red': { 
        textColor: 'text-red-500',
        bgColor: 'bg-white',
        borderColor: 'border-red-500',
        ringColor: 'ring-red-200',
    },
    'orange': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-white',
        borderColor: 'border-orange-500',
        ringColor: 'ring-orange-200',
    },
    'amber': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-white',
        borderColor: 'border-amber-500',
        ringColor: 'ring-amber-200',
    },
    'yellow': { 
        textColor: 'text-yellow-500',
        bgColor: 'bg-white',
        borderColor: 'border-yellow-500',
        ringColor: 'ring-yellow-200',
    },
    'lime': { 
        textColor: 'text-lime-500',
        bgColor: 'bg-white',
        borderColor: 'border-lime-500',
        ringColor: 'ring-lime-200',
    },
    'green': { 
        textColor: 'text-green-500',
        bgColor: 'bg-white',
        borderColor: 'border-green-500',
        ringColor: 'ring-green-200',
    },
    'emerald': { 
        textColor: 'text-emerald-500',
        bgColor: 'bg-white',
        borderColor: 'border-emerald-500',
        ringColor: 'ring-emerald-200',
    },
    'teal': { 
        textColor: 'text-teal-500',
        bgColor: 'bg-white',
        borderColor: 'border-teal-500',
        ringColor: 'ring-teal-200',
    },
    'cyan': { 
        textColor: 'text-cyan-500',
        bgColor: 'bg-white',
        borderColor: 'border-cyan-500',
        ringColor: 'ring-cyan-200',
    },
    'sky': { 
        textColor: 'text-sky-500',
        bgColor: 'bg-white',
        borderColor: 'border-sky-500',
        ringColor: 'ring-sky-200',
    },
    'blue': { 
        textColor: 'text-blue-500',
        bgColor: 'bg-white',
        borderColor: 'border-blue-500',
        ringColor: 'ring-blue-200',
    },
    'indigo': { 
        textColor: 'text-indigo-500',
        bgColor: 'bg-white',
        borderColor: 'border-indigo-500',
        ringColor: 'ring-indigo-200',
    },
    'violet': { 
        textColor: 'text-violet-500',
        bgColor: 'bg-white',
        borderColor: 'border-violet-500',
        ringColor: 'ring-violet-200',
    },
    'purple': { 
        textColor: 'text-purple-500',
        bgColor: 'bg-white',
        borderColor: 'border-purple-500',
        ringColor: 'ring-purple-200',
    },
    'fuchsia': { 
        textColor: 'text-fuchsia-500',
        bgColor: 'bg-white',
        borderColor: 'border-fuchsia-500',
        ringColor: 'ring-fuchsia-200',
    },
    'pink': { 
        textColor: 'text-pink-500',
        bgColor: 'bg-white',
        borderColor: 'border-pink-500',
        ringColor: 'ring-pink-200',
    },
    'rose': { 
        textColor: 'text-rose-500',
        bgColor: 'bg-white',
        borderColor: 'border-rose-500',
        ringColor: 'ring-rose-200',
    }
};
