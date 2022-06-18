import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import PeerComparisonBar from 'components/bar-elements/PeerComparisonBar/PeerComparisonBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

import { BaseColors } from '@utils/objects';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/PeerComparisonBar',
    component: PeerComparisonBar,
} as ComponentMeta<typeof PeerComparisonBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof PeerComparisonBar> = (args) => (
    <>
        {Object.values(BaseColors).map(color => (
            <Card maxWidth="max-w-md">
                <Metric value="$23.456" name="Sales"/>
                <PeerComparisonBar {...args} color={ color } />
            </Card>
        ))}
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    markerPercentage: 50,
    peerGroupMinPercentage: 25,
    peerGroupMaxPercentage: 75,
    marginTop: 'mt-5'
};
