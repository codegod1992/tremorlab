import React from 'react';

import { TwHeight } from 'lib/inputTypes';
import { classNames } from 'lib/classnameUtils';
import { spacing } from 'lib/spacing';

export interface FooterProps {
    height?: TwHeight,
    children: React.ReactNode;
}

const Footer = ({
    height = 'h-20',
    children
}: FooterProps) => {
    return(
        <>
            <div className={ classNames(height) } />
            <div className={ classNames(
                'absolute flex items-center w-full border-t',
                height,
                spacing.none.left,
                spacing.none.right,
                spacing.none.bottom,
                spacing.threeXl.paddingLeft,
                spacing.threeXl.paddingRight,
            ) }
            >
                { children }
            </div>
        </>
    );
};

export default Footer;
