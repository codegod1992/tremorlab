import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentOverflow from 'components/layout-elements/ContentOverflow/ContentOverflow';
import { Text } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/ContentOverflow',
    component: ContentOverflow,
} as ComponentMeta<typeof ContentOverflow>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ContentOverflow> = (args) => (
    <ContentOverflow {...args}>
        <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
        </Text>
    </ContentOverflow>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: null
};
