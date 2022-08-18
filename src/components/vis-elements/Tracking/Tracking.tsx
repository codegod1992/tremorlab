import React from 'react';

import { classNames, parseMarginTopClassNames } from 'lib/classnameUtils';

export interface TrackingProps {
    marginTop?: string,
    children: React.ReactNode
}

const Tracking = ({
    marginTop,
    children
}: TrackingProps) => {
    return(
        <div className={ classNames(
            parseMarginTopClassNames(marginTop),
            'w-full flex items-center space-x-0.5',
        ) }>
            { children }
        </div>
    );
};

export default Tracking;
