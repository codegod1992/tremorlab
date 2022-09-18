/* eslint-disable max-len */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, SelectBoxItem } from 'components';
import SelectBox from 'components/input-elements/SelectBox/SelectBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/SelectBox',
    component: SelectBox,
} as ComponentMeta<typeof SelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof SelectBox> = () => (
    <Card>
        <SelectBox
            handleSelect={ (value) => console.log('the new value is', value) }
            defaultValue={ 1 }
            maxWidth="max-w-sm"
        >
            <SelectBoxItem  value={1} text="Option One ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" />
            <SelectBoxItem  value={2} text="Option Two" />
            <SelectBoxItem  value={3} text="Option Three" />
        </SelectBox>
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) } marginTop="mt-1">
            <SelectBoxItem  value={1} text="Option One ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" />
            <SelectBoxItem  value={2} text="Option Two" />
            <SelectBoxItem  value={3} text="Option Three" />
        </SelectBox>
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
