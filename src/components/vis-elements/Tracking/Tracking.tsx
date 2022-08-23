import React from 'react';

import { classNames, spacing } from 'lib';
import { TwMarginTop } from '../../../lib';

export interface TrackingProps {
    marginTop?: TwMarginTop,
    children: React.ReactNode
}

const Tracking = ({
    marginTop = 'mt-0',
    children
}: TrackingProps) => {
    return(
        <div className={ classNames(
            'w-full flex items-center',
            marginTop,
            spacing.threeXs.spaceX,
        ) }>
            { children }
        </div>
    );
};

export default Tracking;
