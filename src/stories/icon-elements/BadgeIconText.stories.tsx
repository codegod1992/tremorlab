import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Flex } from 'components';

import BadgeIconText from 'components/icon-elements/BadgeIconText/BadgeIconText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeIconText',
    component: BadgeIconText,
} as ComponentMeta<typeof BadgeIconText>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeIconText> = (args) => (
    <Flex>
        <div>Hello</div>
        <BadgeIconText {...args} text={ 'with icon '} Icon={ ArrowUpLineIcon } />
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
    badgeSize: 'sm'
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
