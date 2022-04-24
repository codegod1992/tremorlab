import { IconElementColorTypes, IconElementProporions, IconElementShapeTypes } from '@common/component-utils';

export const shapeMapping: IconElementShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border-2',
    ring: 'ring-1',
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
        textColor: 'text-white',
        bgColor: 'bg-black',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'slate': { 
        textColor: 'text-white',
        bgColor: 'bg-slate-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'gray': { 
        textColor: 'text-white',
        bgColor: 'bg-slate-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'zinc': { 
        textColor: 'text-white',
        bgColor: 'bg-zinc-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'neutral': { 
        textColor: 'text-white',
        bgColor: 'bg-neutral-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'stone': { 
        textColor: 'text-white',
        bgColor: 'bg-stone-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'red': { 
        textColor: 'text-white',
        bgColor: 'bg-red-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'orange': { 
        textColor: 'text-white',
        bgColor: 'bg-orange-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'amber': { 
        textColor: 'text-white',
        bgColor: 'bg-amber-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'yellow': { 
        textColor: 'text-white',
        bgColor: 'bg-yellow-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'lime': { 
        textColor: 'text-white',
        bgColor: 'bg-lime-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'green': { 
        textColor: 'text-white',
        bgColor: 'bg-green-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'emerald': { 
        textColor: 'text-white',
        bgColor: 'bg-emerald-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'teal': { 
        textColor: 'text-white',
        bgColor: 'bg-teal-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'cyan': { 
        textColor: 'text-white',
        bgColor: 'bg-cyan-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'sky': { 
        textColor: 'text-white',
        bgColor: 'bg-sky-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'blue': { 
        textColor: 'text-white',
        bgColor: 'bg-blue-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'indigo': { 
        textColor: 'text-white',
        bgColor: 'bg-indigo-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'violet': { 
        textColor: 'text-white',
        bgColor: 'bg-violet-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'purple': { 
        textColor: 'text-white',
        bgColor: 'bg-purple-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'fuchsia': { 
        textColor: 'text-white',
        bgColor: 'bg-fuchsia-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'pink': { 
        textColor: 'text-white',
        bgColor: 'bg-pink-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    },
    'rose': { 
        textColor: 'text-white',
        bgColor: 'bg-rose-500',
        borderColor: 'border-white',
        ringColor: 'ring-gray-200',
    }
};
