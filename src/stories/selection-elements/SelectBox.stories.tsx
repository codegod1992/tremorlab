import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectBox from 'components/selection-elements/SelectBox/SelectBox';
import { SelectBoxItem } from 'components';

import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/SelectionElements/SelectBox',
    component: SelectBox,
} as ComponentMeta<typeof SelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof SelectBox> = (args) => (
    <div className="flex">
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) }>
            <SelectBoxItem  value={1} name="Option One" />
            <SelectBoxItem  value={2} name="Option Two" />
            <SelectBoxItem  value={3} name="Option Three" />
        </SelectBox>
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
