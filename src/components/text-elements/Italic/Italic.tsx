import React from 'react';

export interface ItalicProps {
    children: React.ReactNode;
}

const Italic = ({
    children
}: ItalicProps) => {
    return(
        <span className="italic">
            { children }
        </span>
    );
};

export default Italic;
