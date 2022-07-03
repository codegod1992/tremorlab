import React from 'react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';

export interface TrackingProps extends BaseComponentProps {
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
