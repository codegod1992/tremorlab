import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from 'components/bar-elements/ProgressBar/ProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/ProgressBar',
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    widthPercentage: 50,
    marginTop: 'mt-5'
};
