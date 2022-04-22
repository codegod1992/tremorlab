import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Flex } from 'components';
import IconTextBadge from 'components/icon-elements/IconTextBadge/IconTextBadge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/IconTextBadge',
    component: IconTextBadge,
} as ComponentMeta<typeof IconTextBadge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof IconTextBadge> = (args) => (
    <Flex>
        <div>Hello</div>
        <IconTextBadge text={ 'with icon '} Icon={ ArrowUpLineIcon } />
    </Flex>
);
  
export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
};
