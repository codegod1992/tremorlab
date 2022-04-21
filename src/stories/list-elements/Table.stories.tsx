import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from 'components/list-elements/Table/Table';
import TableCell from 'components/list-elements/TableCell/TableCell';
import TableRow from 'components/list-elements/TableRow/TableRow';
import { Text } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ListElements/Table',
    component: Table,
} as ComponentMeta<typeof Table>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Table> = (args) => (
    <Table {...args}>
        <TableRow>
            <TableCell>
                <Text>Achilleas Georgios Mitrotasios</Text>
            </TableCell>
            <TableCell>
                <Text>1.000.000</Text>
            </TableCell>
            <TableCell>
                <Text>Region A</Text>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                <Text>Jon Doe</Text>
            </TableCell>
            <TableCell>
                <Text>2.202.000</Text>
            </TableCell>
            <TableCell>
                <Text>Region B</Text>
            </TableCell>
        </TableRow>
    </Table>
);


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    divideY: 'divide-y',
    children: undefined
};
