import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flex from 'components/layout-elements/Flex/Flex';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Flex',
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
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: null
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    justifyContent: 'justify-end',
    alignItems: 'items-center',
    children: null
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
    justifyContent: 'justify-start',
    alignItems: 'items-center',
    children: null
};


export const ItemsEnd = Template.bind({});
ItemsEnd.args = {
    justifyContent: 'justify-betwen',
    alignItems: 'items-end',
    children: null
};

export const ItemsStart = Template.bind({});
ItemsStart.args = {
    justifyContent: 'justify-betwen',
    alignItems: 'items-start',
    children: null
};

export const SpaceX = Template.bind({});
SpaceX.args = {
    justifyContent: 'justify-start',
    alignItems: 'items-baseline',
    spaceX: 'space-x-8',
    children: null
};
