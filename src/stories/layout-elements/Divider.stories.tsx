import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from 'components/layout-elements/Divider/Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/Divider',
    component: Divider,
} as ComponentMeta<typeof Divider>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Divider> = () => (
    <Divider />
);
  
export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {

};
