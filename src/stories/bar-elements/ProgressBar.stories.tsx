import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from 'components/bar-elements/ProgressBar/ProgressBar';
import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/ProgressBar',
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <Card maxWidth='max-w-md'>
        <Metric value='$23.456' name='Sales'/>
        <ProgressBar {...args} />
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    widthPercentage: 50,
    marginTop: 'mt-5'
};
