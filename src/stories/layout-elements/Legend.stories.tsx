import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/layout-elements/Card';
import Legend from 'components/layout-elements/Legend/Legend';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Legend',
    component: Legend,
} as ComponentMeta<typeof Legend>;
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Legend> = (args) => (
    <Card maxWidth='max-w-md'>
        <Legend {...args}>
        
        </Legend>
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: null
};


