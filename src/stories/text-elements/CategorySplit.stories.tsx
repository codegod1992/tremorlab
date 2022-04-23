import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CategorySplit from 'components/text-elements/CategorySplit/CategorySplit';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/CategorySplit',
    component: CategorySplit,
} as ComponentMeta<typeof CategorySplit>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof CategorySplit> = (args) => (
    <CategorySplit {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    firstCategory: { name: 'Fulfilled', value: '223', context: '70%'},
    secondCategory: { name: 'Open', value: '123', context: '30%'}
};
