import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components';
import InlineButton from 'components/button-elements/InlineButton/InlineButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/InlineButton',
    component: InlineButton,
} as ComponentMeta<typeof InlineButton>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof InlineButton> = (args) => (
    <Flex>
        <div>Hello</div>
        <InlineButton {...args} text={ 'Button text' } />
    </Flex>
);


export const ButtonXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonXs.args = {
    buttonSize: 'xs'
};

export const ButtonSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonSm.args = {
};

export const ButtonMd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonMd.args = {
    buttonSize: 'md'
};

export const ButtonLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonLg.args = {
    buttonSize: 'lg'
};
