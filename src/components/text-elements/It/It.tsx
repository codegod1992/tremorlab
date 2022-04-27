import React from 'react';

export interface ItProps {
    children: React.ReactNode;
}

const It = ({
    children
}: ItProps) => {
    return(
        <span className="italic">
            { children }
        </span>
    );
};

export default It;
