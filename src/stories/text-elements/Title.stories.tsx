import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '../../components/text-elements/Title/Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/TextElements/Title',
    component: Title,
} as ComponentMeta<typeof Title>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Title> = (args) => (
    <Title {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

export const WithSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubtitle.args = {
    subtitle: 'Subititle'
};

export const ChangeTextColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangeTextColor.args = {
    title: 'Other Title',
    subtitle: 'Subtitle',
    titleTextColor: 'text-green-600',
    subtitleTextColor: 'text-green-400'
};
