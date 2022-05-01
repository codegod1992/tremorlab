import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from 'components';

import Tracking from 'components/vis-elements/Tracking/Tracking';
import TrackingBlock from 'components/vis-elements/TrackingBlock/TrackingBlock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/VisElements/Tracking',
    component: Tracking,
} as ComponentMeta<typeof Tracking>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Tracking> = (args) => (
    <Card>
        <Tracking>
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-yellow-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-emerald-400" info="Tracking Info" />
            <TrackingBlock bgColor="bg-red-400" info="Tracking Info" />
        </Tracking>
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
