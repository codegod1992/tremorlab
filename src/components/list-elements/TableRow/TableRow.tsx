import React from 'react';

export interface TableRowProps {
    children: React.ReactNode
}

const TableRow = ({
    children
}: TableRowProps) => {
    return(
        <React.Fragment>
            <tr>
                { children }
            </tr>
        </React.Fragment>
    );
};

export default TableRow;
