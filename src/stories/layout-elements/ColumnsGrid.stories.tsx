import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ColGrid from 'components/layout-elements/ColGrid/ColGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/ColGrid',
    component: ColGrid,
} as ComponentMeta<typeof ColGrid>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ColGrid> = (args) => (
    <ColGrid {...args}>
        <div className="w-full bg-emerald-600">Hello</div>
        <div className="w-full bg-emerald-600">World</div>
        <div className="w-full bg-emerald-600">Hi</div>
        <div className="w-full bg-emerald-600">There</div>
    </ColGrid>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
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
