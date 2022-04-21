import React from 'react';

import { 
    classNames,
    parsePaddingLeftClassNames,
    parsePaddingRightClassNames,
    parsePaddingYClassNames,
    parseTextAlignmentClassNames,
    parseTruncateOption,
    parseWidthClassNames
} from '@utils/classname-utils';

export interface TableCellProps {
    width?: string,
    paddingY?: string,
    paddingLeft?: string,
    paddingRight?: string,
    textAlignment?: string,
    truncate?: boolean,
    children: React.ReactNode
}

const TableCell = ({
    width,
    paddingY,
    paddingLeft,
    paddingRight,
    textAlignment,
    truncate = false,
    children
}: TableCellProps) => {
    return(
        <React.Fragment>
            <td className={ classNames(
                parseWidthClassNames(width),
                parsePaddingYClassNames(paddingY),
                parsePaddingLeftClassNames(paddingLeft),
                parsePaddingRightClassNames(paddingRight),
                parseTextAlignmentClassNames(textAlignment),
                parseTruncateOption(truncate)
            )}>
                { children }
            </td>
        </React.Fragment>
    );
};

export default TableCell;
