import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MultiSelectBox from 'components/input-elements/MultiSelectBox/MultiSelectBox';
import MultiSelectBoxItem from 'components/input-elements/MultiSelectBox/MultiSelectBoxItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/MultiSelectBox',
    component: MultiSelectBox,
} as ComponentMeta<typeof MultiSelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MultiSelectBox> = () => (
    <MultiSelectBox
        defaultValues={[1, 2]}
        handleSelect={ (selectedItems) => console.log(selectedItems) }
        maxWidth="max-w-sm"
    >
        <MultiSelectBoxItem text="Option 1 ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" value={ 1 } />
        <MultiSelectBoxItem text="Option 2" value={ 2 } />
        <MultiSelectBoxItem text="Option 3" value={ 3 } />
    </MultiSelectBox>


);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
