import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseColors } from '@utils/objects';
import Metric from '../../components/text-elements/Metric/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/Metric',
    component: Metric,
} as ComponentMeta<typeof Metric>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Metric> = (args) => (
    <>
        { Object.values(BaseColors).map(color => (
            <Metric {...args} color={ color } />
        ))}
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    value: 'USD 70,000.00',
};

export const WithName = Template.bind({});
WithName.args = {
    value: '70,000.00 USD',
    name: 'Salary'
};
