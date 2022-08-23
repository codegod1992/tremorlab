import React from 'react';

import { 
    classNames,
    parseTextAlignmentClassNames,
    spacing,
} from 'lib';

export interface TableCellProps {
    textAlignment?: string,
    children: React.ReactNode
}

const TableCell = ({
    textAlignment = 'text-left',
    children
}: TableCellProps) => {
    return(
        <>
            <td className={ classNames(
                parseTextAlignmentClassNames(textAlignment),
                'align-middle whitespace-nowrap tabular-nums',
                spacing.twoXl.paddingLeft,
                spacing.twoXl.paddingRight,
                spacing.twoXl.paddingTop,
                spacing.twoXl.paddingBottom,
            )}>
                { children }
            </td>
        </>
    );
};

export default TableCell;
