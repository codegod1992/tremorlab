import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import StackedBar from 'components/bar-elements/StackedBar/StackedBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/StackedBar',
    component: StackedBar,
} as ComponentMeta<typeof StackedBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof StackedBar> = (args) => (
    <Card maxWidth="max-w-md">
        <Metric value="$23.456" name="Sales"/>
        <StackedBar {...args} />
    </Card>
);
  

export const WithoutMarker = Template.bind({});
WithoutMarker.args = {
    elements: [
        [10, 'emerald'],
        [25, 'yellow'],
        [45, 'orange'],
        [20, 'rose'],
    ],
    marginTop: 'mt-5'
};


export const WithMarker = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMarker.args = {
    elements: [
        [10, 'emerald'],
        [25, 'amber'],
        [40, 'yellow'],
        [25, 'rose'],
    ],
    markerPercentageValue: 90,
    marginTop: 'mt-5' // only applies to story?
};
