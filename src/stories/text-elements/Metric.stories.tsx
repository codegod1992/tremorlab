import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Metric from '../../components/text-elements/Metric/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/Metric',
    component: Metric,
} as ComponentMeta<typeof Metric>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Metric> = (args) => (
    <Metric {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    value: 'USD 70,000.00',
};

export const WithSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubtitle.args = {
    value: 'USD 70,000.00',
    context: 'from 20,000.00 $'
};

export const ChangeTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangeTextColor.args = {
    value: 'USD 70,000.00',
    context: 'from USD 20,000.00',
    valueTextColor: 'text-green-600',
    contexTextColor: 'text-green-400'
};
