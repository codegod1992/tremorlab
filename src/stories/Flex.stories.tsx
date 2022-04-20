import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flex from '../components/Flex/Flex';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;
  
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flex> = (args) => (
    <div className="h-screen">
        <Flex {...args}>
            <div className="text-3xl">Hello</div>
            <div>World</div>
        </Flex>
    </div>
);
  
export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    justifyContent: 'justify-end',
    alignItems: 'items-end',
    children: null
};

