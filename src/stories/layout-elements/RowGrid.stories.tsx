import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import RowGrid from 'components/layout-elements/RowGrid/RowGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/RowGrid',
    component: RowGrid,
} as ComponentMeta<typeof RowGrid>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof RowGrid> = (args) => (
    <RowGrid {...args}>
        <div className="w-full bg-emerald-600">Hello</div>
        <div className="w-full bg-emerald-600">World</div>
        <div className="w-full bg-emerald-600">Hi</div>
        <div className="w-full bg-emerald-600">There</div>
    </RowGrid>
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

export const ChangeRows = Template.bind({});
ChangeRows.args = {
    numRows: 1,
    gapX: 'gap-x-4',
    gapY: 'gap-y-4',
    children: null
};
