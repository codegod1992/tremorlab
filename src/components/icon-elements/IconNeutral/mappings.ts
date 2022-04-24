import { IconElementColorTypes, IconElementProporions, IconElementShapeTypes } from '@common/component-utils';

export const shapeMapping: IconElementShapeTypes = {
    rounded: '',
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
        textColor:'text-black',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'slate': { 
        textColor:'text-slate-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'gray': { 
        textColor:'text-gray-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'zinc': { 
        textColor:'text-zinc-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'neutral': { 
        textColor:'text-neutral-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'stone': { 
        textColor:'text-stone-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'red': { 
        textColor:'text-red-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'orange': { 
        textColor:'text-amber-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'amber': { 
        textColor:'text-amber-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'yellow': { 
        textColor:'text-yellow-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'lime': { 
        textColor:'text-lime-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'green': { 
        textColor:'text-green-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'emerald': { 
        textColor:'text-emerald-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'teal': { 
        textColor:'text-teal-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'cyan': { 
        textColor:'text-cyan-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'sky': { 
        textColor:'text-sky-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'blue': { 
        textColor:'text-blue-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'indigo': { 
        textColor:'text-indigo-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'violet': { 
        textColor:'text-violet-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'purple': { 
        textColor:'text-purple-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'fuchsia': { 
        textColor:'text-fuchsia-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'pink': { 
        textColor:'text-pink-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    },
    'rose': { 
        textColor:'text-rose-500',
        bgColor:'',
        borderColor: '',
        ringColor: '',
    }
};
