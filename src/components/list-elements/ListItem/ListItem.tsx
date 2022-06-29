import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface ListItemProps {
    children: React.ReactNode
}

const ListItem = ({
    children
}: ListItemProps) => {
    return(
        <>
            <li className={ classNames(
                'flex justify-between items-center',
                'py-2 truncate'
            ) }>
                { children }
            </li>
        </>
    );
};

export default ListItem;
