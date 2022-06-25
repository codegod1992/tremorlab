import React from 'react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';

export interface TrackingBlockProps extends BaseComponentProps {
    children: React.ReactNode
}

const Tracking = ({
    marginTop,
    children
}: TrackingBlockProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            { children }
        </div>
    );
};

export default Tracking;
