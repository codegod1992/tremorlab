import React from 'react';
import { render } from '@testing-library/react';

import BodyText from 'components/text-elements/BodyText';
import Table from 'components/list-elements/Table';
import TableCell from 'components/list-elements/TableCell';
import TableRow from 'components/list-elements/TableRow';

describe('Table', () => {
    test('renders the Table component', () => {
        render(
            <Table>
                <TableRow>
                    <TableCell>
                        <BodyText>Hello</BodyText>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <BodyText>World</BodyText>
                    </TableCell>
                </TableRow>
            </Table>
        );
    });
});
