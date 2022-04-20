import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '../components/Card/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Card',
    component: Card,
} as ComponentMeta<typeof Card>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args}>
        <div>title</div>
    </Card>
);
  
export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    children: null
};
