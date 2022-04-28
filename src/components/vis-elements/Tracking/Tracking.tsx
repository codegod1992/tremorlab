import React from 'react';

export interface TrackingBlockProps {
    children: React.ReactNode
}

const Tracking = ({
    children
}: TrackingBlockProps) => {
    return(
        <div className="w-full flex items-center flex-shrink-0 space-x-0.5">
            { children }
        </div>
    );
};

export default Tracking;
