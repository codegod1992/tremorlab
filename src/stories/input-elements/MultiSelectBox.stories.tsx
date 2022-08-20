import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MultiSelectBox from 'components/input-elements/MultiSelectBox/MultiSelectBox';
import MultiSelectBoxItem from 'components/input-elements/MultiSelectBox/MultiSelectBoxItem';
import { SelectBox, SelectBoxItem } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/MultiSelectBox',
    component: MultiSelectBox,
} as ComponentMeta<typeof MultiSelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MultiSelectBox> = () => (
    <div>
        <MultiSelectBox>
            <MultiSelectBoxItem name="Option 1 ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" value={ 1 } />
            <MultiSelectBoxItem name="Option 2" value={ 2 } />
            <MultiSelectBoxItem name="Option 3" value={ 3 } />
        </MultiSelectBox>
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) } marginTop="mt-1">
            <SelectBoxItem  value={1} name="Option One ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" />
            <SelectBoxItem  value={2} name="Option Two" />
            <SelectBoxItem  value={3} name="Option Three" />
        </SelectBox>
    </div>

);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
