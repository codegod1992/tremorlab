import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import DeltaBar from 'components/bar-elements/DeltaBar/DeltaBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/DeltaBar',
    component: DeltaBar,
} as ComponentMeta<typeof DeltaBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof DeltaBar> = (args) => (
    <DeltaBar {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    widthPercentage: 50,
    deltaType:'increase'
};
