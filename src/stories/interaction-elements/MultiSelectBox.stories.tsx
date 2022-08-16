import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MultiSelectBox from 'components/interaction-elements/MultiSelectBox/MultiSelectBox';
import MultiSelectBoxItem from 'components/interaction-elements/MultiSelectBox/MultiSelectBoxItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/MultiSelectBox',
    component: MultiSelectBox,
} as ComponentMeta<typeof MultiSelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MultiSelectBox> = () => (
    <MultiSelectBox>
        <MultiSelectBoxItem name="Option 1 ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" value={ 1 } />
        <MultiSelectBoxItem name="Option 2" value={ 2 } />
        <MultiSelectBoxItem name="Option 3" value={ 3 } />
    </MultiSelectBox>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
