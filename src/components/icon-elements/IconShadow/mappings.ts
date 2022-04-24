import { IconElementColorTypes, IconElementProporions, IconElementShapeTypes } from '@common/component-utils';

export const shapeMapping: IconElementShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border',
    ring: '',
    shadow: 'shadow',
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
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'slate': { 
        textColor: 'text-slate-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'gray': { 
        textColor: 'text-gray-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'zinc': { 
        textColor: 'text-zinc-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'neutral': { 
        textColor: 'text-neutral-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'stone': { 
        textColor: 'text-stone-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'red': { 
        textColor: 'text-red-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'orange': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'amber': { 
        textColor: 'text-amber-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'yellow': { 
        textColor: 'text-yellow-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'lime': { 
        textColor: 'text-lime-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'green': { 
        textColor: 'text-green-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'emerald': { 
        textColor: 'text-emerald-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'teal': { 
        textColor: 'text-teal-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'cyan': { 
        textColor: 'text-cyan-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'sky': { 
        textColor: 'text-sky-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'blue': { 
        textColor: 'text-blue-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'indigo': { 
        textColor: 'text-indigo-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'violet': { 
        textColor: 'text-violet-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'purple': { 
        textColor: 'text-purple-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'fuchsia': { 
        textColor: 'text-fuchsia-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'pink': { 
        textColor: 'text-pink-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    },
    'rose': { 
        textColor: 'text-rose-500',
        bgColor: 'bg-white',
        borderColor: 'border-gray-200',
        ringColor: '',
    }
};
