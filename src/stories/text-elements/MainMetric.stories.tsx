import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainMetric from '../../components/text-elements/MainMetric/MainMetric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/MainMetric',
    component: MainMetric,
} as ComponentMeta<typeof MainMetric>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MainMetric> = (args) => (
    <MainMetric {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

export const WithSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubtitle.args = {
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
