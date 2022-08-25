import React, { useRef } from 'react';

import {
    classNames,
    defaultColors,
    getColorVariantsFromColorThemeValue,
    spacing,
    useOnClickOutside,
} from 'lib';

export interface ModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    triggerRef: React.RefObject<HTMLElement>,
    width?: string,
    maxHeight?: string,
    children: React.ReactNode,
}

const Modal = ({
    showModal,
    setShowModal,
    triggerRef,
    width = 'w-full',
    maxHeight = 'max-h-72',
    children,
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(modalRef, (e) => {
        const isTriggerElem = triggerRef ? triggerRef.current?.contains(e.target) : false;
        if (!isTriggerElem) setShowModal(false);
    });

    return (
        showModal ? (
            <div
                ref={ modalRef }
                className={ classNames(
                    'absolute -bottom-2 translate-y-full z-10 rounded-md shadow-lg border divide-y overflow-y-auto',
                    width,
                    maxHeight,
                    getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                    getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
                    getColorVariantsFromColorThemeValue(defaultColors.lightBorder).divideColor,
                    spacing.none.left,
                    spacing.none.right,
                    spacing.twoXs.marginTop,
                    spacing.twoXs.marginBottom,
                ) }
            >
                { children }
            </div>
        ) : null
    );
};

export default Modal;
