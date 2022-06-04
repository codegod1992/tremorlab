import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import DividerHorizontal from 'components/layout-elements/DividerHorizontal/DividerHorizontal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/DividerHorizontal',
    component: DividerHorizontal,
} as ComponentMeta<typeof DividerHorizontal>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof DividerHorizontal> = (args) => (
    <div className="w-72">
        <DividerHorizontal />
    </div>
);
  
export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {

};
