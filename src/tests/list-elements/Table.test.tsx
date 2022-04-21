import React from 'react';
import { render } from '@testing-library/react';

import Table from 'components/list-elements/Table';
import TableCell from 'components/list-elements/TableCell';
import TableRow from 'components/list-elements/TableRow';
import Text from 'components/text-elements/Text';

describe('Table', () => {
    test('renders the Table component', () => {
        render(
            <Table>
                <TableRow>
                    <TableCell>
                        <Text>Hello</Text>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Text>World</Text>
                    </TableCell>
                </TableRow>
            </Table>
        );
    });
});
