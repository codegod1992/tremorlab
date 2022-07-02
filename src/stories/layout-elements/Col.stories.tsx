import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from 'components';

import Col from 'components/layout-elements/ColGrid/Col';
import ColGrid from 'components/layout-elements/ColGrid/ColGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Col',
    component: Col,
} as ComponentMeta<typeof ColGrid>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ColGrid> = (args) => (
    <ColGrid {...args}>
        <Col><Card>Hello</Card></Col>
        <Col><Card>World</Card></Col>
        <Col><Card>!!!</Card></Col>
        <Col colStart="col-start-2" colSpan="col-span-2"><Card>Hello</Card></Col>
        <Col><Card>World</Card></Col>
    </ColGrid>
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

export const ChangeCols = Template.bind({});
ChangeCols.args = {
    numColumns: 1,
    gapX: 'gap-x-4',
    gapY: 'gap-y-4',
    children: null
};
