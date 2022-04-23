import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon';

import CallOut from '../../components/text-elements/CallOut/CallOut';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/CallOut',
    component: CallOut,
} as ComponentMeta<typeof CallOut>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof CallOut> = (args) => (
    <CallOut {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: 'Performance Metric',
    text: 'You are outranking 83% of the sales representatives in your cohort. Sit repellendus qui ut at blanditis \
           et quo et molestiae. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus \
           qui ut at blanditiis et quo et molestiae',
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
    title: 'Performance Metric',
    text: 'You are outranking 83% of the sales representatives in your cohort. Sit repellendus qui ut at blanditis \
           et quo et molestiae. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus \
           qui ut at blanditiis et quo et molestiae',
    Icon: ArrowRightUpLineIcon
};
