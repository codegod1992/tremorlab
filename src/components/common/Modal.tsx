import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface ModalProps {
    ref: React.RefObject<HTMLDivElement>,
    showModal: boolean,
    children: React.ReactNode,
}

const Modal = ({
    ref,
    showModal,
    children,
}: ModalProps) => (
    showModal ? (
        <div
            ref={ ref }
            className={ classNames(
                'absolute py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y',
                'divide-gray-100 focus:outline-none -bottom-2 translate-y-full',
                'w-full max-h-72 overflow-y-auto z-10 inset-x-0'
            ) }
        >
            { children }
        </div>
    ) : null
);

export default Modal;
