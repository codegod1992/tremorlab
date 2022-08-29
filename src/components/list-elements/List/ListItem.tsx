import React from 'react';

import { classNames, fontSize, spacing } from 'lib';
import { SpaceX } from '../../../lib';

export interface ListItemProps {
    spaceX?: SpaceX,
    children: React.ReactNode
}

const ListItem = ({
    spaceX = 'space-x-0',
    children,
}: ListItemProps) => {
    return(
        <>
            <li className={ classNames(
                'flex justify-between items-center truncate tabular-nums',
                spaceX,
                spacing.sm.paddingTop,
                spacing.sm.paddingBottom,
                fontSize.sm,
            ) }>
                { children }
            </li>
        </>
    );
};

export default ListItem;
