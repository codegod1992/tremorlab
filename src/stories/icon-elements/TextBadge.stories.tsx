import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Flex } from 'components';
import TextBadge from 'components/icon-elements/TextBadge/TextBadge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/TextBadge',
    component: TextBadge,
} as ComponentMeta<typeof TextBadge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TextBadge> = (args) => (
    <Flex>
        <div>Hello</div>
        <TextBadge {...args} text={ 'Only Text' } />
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
