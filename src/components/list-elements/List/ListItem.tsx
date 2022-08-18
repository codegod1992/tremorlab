import React from 'react';

import { classNames } from 'lib/classnameUtils';

export interface ListItemProps {
    children: React.ReactNode
}

const ListItem = ({
    children
}: ListItemProps) => {
    return(
        <>
            <li className={ classNames(
                'flex justify-between items-center py-2 truncate tabular-nums',
            ) }>
                { children }
            </li>
        </>
    );
};

export default ListItem;
