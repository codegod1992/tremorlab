import React from 'react';

import { classNames, fontSize, spacing } from 'lib';

export interface ListItemProps {
    children: React.ReactNode
}

const ListItem = ({
    children
}: ListItemProps) => {
    return(
        <>
            <li className={ classNames(
                'flex justify-between items-center truncate tabular-nums',
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
