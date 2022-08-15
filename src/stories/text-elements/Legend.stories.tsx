import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/layout-elements/Card';
import Legend from 'components/text-elements/Legend/Legend';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Legend',
    component: Legend,
} as ComponentMeta<typeof Legend>;
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Legend> = (args) => (
    <Card maxWidth="max-w-md">
        <Legend {...args} />
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    categories: [
        { name: 'Critical', color: 'rose' },
        { name: 'This is a very long catergory name to test an edge case', color: 'blue' },
        { name: 'Category C', color: 'emerald' },
        { name: 'Category D', color: 'yellow' },
    ]
};


