import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

import { Flex } from 'components';
import 
SecondaryButtonLeadingIcon from 'components/button-elements/SecondaryButtonLeadingIcon/SecondaryButtonLeadingIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/SecondaryButtonLeadingIcon',
    component: SecondaryButtonLeadingIcon,
} as ComponentMeta<typeof SecondaryButtonLeadingIcon>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof SecondaryButtonLeadingIcon> = (args) => (
    <Flex>
        <div>Hello</div>
        <SecondaryButtonLeadingIcon {...args} text={ 'Button text' } Icon={ ArrowRightLineIcon } />
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
