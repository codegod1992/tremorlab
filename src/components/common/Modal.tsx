import React, { useRef } from 'react';

import { classNames, parseMaxHeightClassNames, parseWidthClassNames } from '@utils/classname-utils';
import { useOnClickOutside } from '@utils/utils';

export interface ModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    width?: string,
    maxHeight?: string,
    children: React.ReactNode,
}

const Modal = ({
    showModal,
    setShowModal,
    width = 'w-full',
    maxHeight = 'max-h-72',
    children,
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(modalRef, () => setShowModal(false));

    return (
        showModal ? (
            <div
                ref={ modalRef }
                className={ classNames(
                    'absolute py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y',
                    'divide-gray-100 focus:outline-none -bottom-2 translate-y-full',
                    'overflow-y-auto z-10 inset-x-0',
                    parseWidthClassNames(width),
                    parseMaxHeightClassNames(maxHeight),
                ) }
            >
                { children }
            </div>
        ) : null
    );
};

export default Modal;
