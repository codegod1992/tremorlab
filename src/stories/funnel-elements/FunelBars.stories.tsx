import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FunnelBars from 'components/funnel-elements/FunnelBars/FunnelBars';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/FunnelElements/FunnelBars',
    component: FunnelBars,
} as ComponentMeta<typeof FunnelBars>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof FunnelBars> = (args) => (
    <FunnelBars {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    widthPercentageList: [100, 70, 30, 10]
};
