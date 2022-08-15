import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryBar from 'components/vis-elements/CategoryBar/CategoryBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/VisElements/CategoryBar',
    component: CategoryBar,
} as ComponentMeta<typeof CategoryBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof CategoryBar> = (args) => (
    <Card>
        <Metric>
            $23.456
        </Metric>
        <CategoryBar {...args} />
    </Card>
);
  

export const WithoutMarker = Template.bind({});
WithoutMarker.args = {
    categories: [
        [10, 'emerald'],
        [25, 'yellow'],
        [45, 'orange'],
        [20, 'rose'],
    ],
    marginTop: 'mt-5',
};


export const WithMarker = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMarker.args = {
    categories: [
        [10, 'emerald'],
        [25, 'amber'],
        [40, 'yellow'],
        [25, 'rose'],
    ],
    percentageValue: 90,
    tooltip: '90%',
    marginTop: 'mt-5' // only applies to story?
};
