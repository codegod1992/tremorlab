import React from 'react';

import { classNames, fontSize } from 'lib';
import { MarginTop } from '../../../lib';

export interface ItalicProps {
    marginTop?: MarginTop,
    children: React.ReactNode;
}

const Italic = ({
    marginTop = 'mt-0',
    children
}: ItalicProps) => {
    return(
        <span className={ classNames(
            'italic whitespace-nowrap text-inherit',
            marginTop,
            fontSize.sm,
        ) }
        >
            { children }
        </span>
    );
};

export default Italic;
