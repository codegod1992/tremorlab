import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components';

import BadgeDelta from 'components/icon-elements/BadgeDelta/BadgeDelta';
import { DeltaTypes } from '@utils/objects';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeDelta',
    component: BadgeDelta,
} as ComponentMeta<typeof BadgeDelta>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeDelta> = (args) => (
    <Flex>
        <div>Hello</div>
        <BadgeDelta {...args} />
    </Flex>
);
  
export const Increase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Increase.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Increase
};

export const ModerateIncrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncrease.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateIncrease
};

export const Decrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Decrease.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Decrease
};

export const ModerateDecrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecrease.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateDecrease
};

export const Unchanged = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchanged.args = {
    text: '0.0%',
    deltaType: DeltaTypes.Unchanged
};

export const IncreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IncreaseReversed.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Increase,
    isIncreasePositive: false
};

export const ModerateIncreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncreaseReversed.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateIncrease,
    isIncreasePositive: false
};

export const DecreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DecreaseReversed.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Decrease,
    isIncreasePositive: false
};

export const ModerateDecreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecreaseReversed.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateDecrease,
    isIncreasePositive: false
};

export const UnchangedReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnchangedReversed.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Unchanged,
    isIncreasePositive: false
};


export const IncreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IncreaseXs.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Increase,
    size: 'xs'
};

export const ModerateIncreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncreaseXs.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateIncrease,
    size: 'xs'
};

export const DecreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DecreaseXs.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Decrease,
    size: 'xs'
};

export const ModerateDecreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecreaseXs.args = {
    text: '12.5%',
    deltaType: DeltaTypes.ModerateDecrease,
    size: 'xs'
};

export const UnchangedXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnchangedXs.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Unchanged,
    size: 'xs'
};

