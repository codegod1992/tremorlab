import React from 'react';

import { 
    classNames,
    parseFixedHeightClassNames,
    parsePaddingXClassNames
} from '@utils/classname-utils';

export interface FooterProps {
    fixedHeight?: string,
    paddingX?: string,
    children: React.ReactNode;
}

const Footer = ({
    fixedHeight = 'h-20',
    paddingX = 'px-6',
    children
}: FooterProps) => {
    return(
        <>
            <div className={ classNames(parseFixedHeightClassNames(fixedHeight)) } />
            <div className={ classNames(
                parseFixedHeightClassNames(fixedHeight),
                parsePaddingXClassNames(paddingX),
                'absolute bottom-0 left-0 right-0 w-full flex items-center border-t'
            ) }
            >
                { children }
            </div>
        </>
    );
};

export default Footer;
