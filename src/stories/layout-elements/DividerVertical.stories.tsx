import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import DividerVertical from 'components/layout-elements/DividerVertical/DividerVertical';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/DividerVertical',
    component: DividerVertical,
} as ComponentMeta<typeof DividerVertical>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof DividerVertical> = (args) => (
    <div className="h-72">
        <DividerVertical />
    </div>
);
  
export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical.args = {

};
