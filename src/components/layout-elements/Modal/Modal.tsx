import React, { useRef } from 'react';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMaxHeightClassNames,
    parseWidthClassNames
} from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';
import { spacing } from 'lib/spacing';
import { useOnClickOutside } from 'lib/utils';

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
                    'absolute -bottom-2 translate-y-full z-10 rounded-md shadow-lg border divide-y overflow-y-auto',
                    parseWidthClassNames(width),
                    parseMaxHeightClassNames(maxHeight),
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
