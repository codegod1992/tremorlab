import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkerBar from 'components/bar-elements/MarkerBar/MarkerBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

import { BaseColors } from '@utils/objects';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/MarkerBar',
    component: MarkerBar,
} as ComponentMeta<typeof MarkerBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MarkerBar> = (args) => (
    <>
        { Object.values(BaseColors).map(color => (
            <Card>
                <Metric value="$23.456" name="Sales"/>
                <MarkerBar {...args} color={ color } />
            </Card>
        ))}
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    percentageValue: 80,
    marginTop: 'mt-5'
};
