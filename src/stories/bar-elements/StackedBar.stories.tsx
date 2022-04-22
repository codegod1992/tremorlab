import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import StackedBar from 'components/bar-elements/StackedBar/StackedBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/StackedBar',
    component: StackedBar,
} as ComponentMeta<typeof StackedBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof StackedBar> = (args) => (
    <StackedBar {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    elements: [
        [25, 'bg-yellow-400'],
        [50, 'bg-green-400'],
        [25, 'bg-blue-400'],
    ]
};
