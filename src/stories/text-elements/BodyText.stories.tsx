import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import BodyText from 'components/text-elements/BodyText/BodyText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/BodyText',
    component: BodyText,
} as ComponentMeta<typeof BodyText>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BodyText> = (args) => (
    <BodyText {...args}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
    </BodyText>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: null
};

export const TextCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextCenter.args = {
    textAlignment: 'text-center',
    children: null
};


export const TextRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextRight.args = {
    textAlignment: 'text-right',
    children: null
};

export const TextJustify = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextJustify.args = {
    textAlignment: 'text-justify',
    children: null
};

export const TextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextColor.args = {
    textColor: 'text-green-500',
    textAlignment: 'text-left',
    children: null
};
