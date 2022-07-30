import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import RangeBar from 'components/bar-elements/RangeBar/RangeBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

import { BaseColors } from '@utils/objects';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/RangeBar',
    component: RangeBar,
} as ComponentMeta<typeof RangeBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof RangeBar> = (args) => (
    <>
        {Object.values(BaseColors).map(color => (
            <Card>
                <Metric value="$23.456" name="Sales"/>
                <RangeBar {...args} color={ color } />
            </Card>
        ))}
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    percentageValue: 50,
    minRangeValue: 25,
    maxRangeValue: 75,
    marginTop: 'mt-5'
};
