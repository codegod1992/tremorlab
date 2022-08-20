/* eslint-disable max-len */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectBox from 'components/input-elements/SelectBox/SelectBox';
import { Dropdown, DropdownItem, SelectBoxItem } from 'components';
import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/SelectBox',
    component: SelectBox,
} as ComponentMeta<typeof SelectBox>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof SelectBox> = () => (
    <>
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) } defaultValue={ 1 }>
            <SelectBoxItem  value={1} name="Option One ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" />
            <SelectBoxItem  value={2} name="Option Two" />
            <SelectBoxItem  value={3} name="Option Three" />
        </SelectBox>
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) } marginTop="mt-1">
            <SelectBoxItem  value={1} name="Option One ABCSASDASDASDASASDASDASDSASDASABCSASDASDASDASASDASDASDSASDAS" />
            <SelectBoxItem  value={2} name="Option Two" />
            <SelectBoxItem  value={3} name="Option Three" />
        </SelectBox>
        <Dropdown handleSelect={ (value) => console.log('The selected value is', value) }>
            <DropdownItem value={ 5 } name={ 'Five' } Icon={ CalendarIcon } shortcut={ 'F' } />
            <DropdownItem value={ 3 } name={ 'Three' } Icon={ CalendarIcon } shortcut={ 'T' } />
            <DropdownItem value={ 1 } name={ 'One' } Icon={ CalendarIcon } shortcut={ 'O' } />
        </Dropdown>
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
