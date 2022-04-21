import React from 'react';

import { classNames, parsePaddingYClassNames, parseSpaceXClassNames } from '@utils/classname-utils';

export interface ListItemProps {
    paddingY?: string,
    spaceX?: string,
    children: React.ReactNode
}

const ListItem = ({
    paddingY = 'py-2',
    spaceX,
    children
}: ListItemProps) => {
    return(
        <React.Fragment>
            <li className={ classNames(
                'flex justify-between items-center',
                parseSpaceXClassNames(spaceX),
                parsePaddingYClassNames(paddingY)
            ) }>
                { children }
            </li>
        </React.Fragment>
    );
};

export default ListItem;
