import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BodyText } from 'components';
import Table from 'components/list-elements/Table/Table';
import TableCell from 'components/list-elements/TableCell/TableCell';
import TableRow from 'components/list-elements/TableRow/TableRow';

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
                <BodyText>Achilleas Georgios Mitrotasios</BodyText>
            </TableCell>
            <TableCell>
                <BodyText>1.000.000</BodyText>
            </TableCell>
            <TableCell>
                <BodyText>Region A</BodyText>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                <BodyText>Jon Doe</BodyText>
            </TableCell>
            <TableCell>
                <BodyText>2.202.000</BodyText>
            </TableCell>
            <TableCell>
                <BodyText>Region B</BodyText>
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
