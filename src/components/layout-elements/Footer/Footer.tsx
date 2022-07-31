import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
} from '@utils/classname-utils';

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
                parseFixedHeightClassNames(fixedHeight),
                'absolute bottom-0 left-0 right-0 px-6 w-full flex items-center border-t'
            ) }
            >
                { children }
            </div>
        </>
    );
};

export default Footer;
