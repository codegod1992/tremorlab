import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/layout-elements/Card/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Card',
    component: Card,
} as ComponentMeta<typeof Card>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args}>
        <div>title</div>
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: null
};

export const Decoration = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Decoration.args = {
    decoration: 'left',
    children: null
};
