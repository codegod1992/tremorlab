import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListValue from '../../components/list-elements/ListValue/ListValue';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ListElements/ListValue',
    component: ListValue,
} as ComponentMeta<typeof ListValue>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ListValue> = (args) => (
    <ListValue {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    primary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    secondary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
};
