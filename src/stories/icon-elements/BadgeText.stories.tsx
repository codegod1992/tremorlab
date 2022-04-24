import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components';

import BadgeText from 'components/icon-elements/BadgeText/BadgeText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeText',
    component: BadgeText,
} as ComponentMeta<typeof BadgeText>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeText> = (args) => (
    <Flex>
        <div>Hello</div>
        <BadgeText {...args} text={ 'Only Text' } />
    </Flex>
);


export const BadgeXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeXs.args = {
    badgeSize: 'xs'
};

export const BadgeSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeSm.args = {
};

export const BadgeMd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeMd.args = {
    badgeSize: 'md'
};

export const BadgeLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeLg.args = {
    badgeSize: 'lg'
};
