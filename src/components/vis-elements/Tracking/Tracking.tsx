import React from 'react';

import { classNames, parseMarginTopClassNames } from 'lib/classnameUtils';
import { spacing } from 'lib/spacing';

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
            'w-full flex items-center',
            parseMarginTopClassNames(marginTop),
            spacing.threeXs.spaceX,
        ) }>
            { children }
        </div>
    );
};

export default Tracking;
