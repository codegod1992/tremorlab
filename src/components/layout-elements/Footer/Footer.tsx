import React from 'react';

import { classNames, parseHeight, spacing } from 'lib';
import { Height } from '../../../lib';

export interface FooterProps {
    height?: Height,
    children: React.ReactNode;
}

const Footer = ({
    height = 'h-14',
    children
}: FooterProps) => {
    return(
        <>
            <div className={ classNames(height) } />
            <div className={ classNames(
                'absolute flex items-center w-full border-t',
                parseHeight(height),
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
