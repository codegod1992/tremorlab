import React from 'react';

export interface LightProps {
    children: React.ReactNode
}

const Light = ({
    children
}: LightProps) => {
    return(
        <span className="font-light">
            { children }
        </span>
    );
};

export default Light;
