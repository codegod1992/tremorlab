import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Flex } from 'components';

import Badge from 'components/icon-elements/Badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeWithIcon',
    component: Badge,
} as ComponentMeta<typeof Badge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Badge> = (args) => (
    <Flex>
        <div>Hello</div>
        <Badge {...args} text={ 'with icon '} Icon={ ArrowUpLineIcon } />
    </Flex>
);
  
export const BadgeXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeXs.args = {
    size: 'xs'
};

export const BadgeSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeSm.args = {
    size: 'sm'
};

export const BadgeMd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeMd.args = {
    size: 'md'
};

export const BadgeLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeLg.args = {
    size: 'lg'
};
