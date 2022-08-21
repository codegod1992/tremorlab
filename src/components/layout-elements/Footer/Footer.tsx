import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
} from 'lib/classnameUtils';
import { spacing } from 'lib/spacing';

export interface FooterProps {
    fixedHeight?: string,
    children: React.ReactNode;
}

const Footer = ({
    fixedHeight = 'h-20',
    children
}: FooterProps) => {
    return(
        <>
            <div className={ classNames(parseFixedHeightClassNames(fixedHeight)) } />
            <div className={ classNames(
                'absolute flex items-center w-full border-t',
                parseFixedHeightClassNames(fixedHeight),
                parseFixedHeightClassNames(fixedHeight),
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
