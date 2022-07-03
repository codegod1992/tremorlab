import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, Footer } from 'components';

import Row from 'components/layout-elements/RowGrid/Row';
import RowGrid from 'components/layout-elements/RowGrid/RowGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Row',
    component: Row,
} as ComponentMeta<typeof RowGrid>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof RowGrid> = (args) => (
    <RowGrid {...args}>
        <Row><Card>1</Card></Row>
        <Row><Card hFull={true}>2</Card></Row>
        <Row>
            <Card hFull={true}>
                3
                <Footer>This is a Footer</Footer>
            </Card>
        </Row>
        <Row rowStart="row-start-2" rowSpan="row-span-2">
            <Card hFull={true}>
                4
                <Footer>This is a Footer</Footer>
            </Card>
        </Row>
        <Row><Card>5</Card></Row>
    </RowGrid>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    gapX: 'gap-x-1',
    children: null
};

export const GapIncrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GapIncrease.args = {
    gapX: 'gap-x-4',
    gapY: 'gap-y-4',
    children: null
};

export const ChangeRows = Template.bind({});
ChangeRows.args = {
    numRows: 1,
    gapX: 'gap-x-4',
    gapY: 'gap-y-4',
    children: null
};
