import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, DropdownItem, SelectBox, SelectBoxItem } from 'components';
import Dropdown from 'components/input-elements/Dropdown/Dropdown';

import { CalendarIcon } from 'assets';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Dropdown> = () => (
    <Card>
        <Dropdown handleSelect={ (value) => console.log('The selected value is', value) } maxWidth="max-w-sm">
            <DropdownItem value={ 5 } text={ 'Five' } Icon={ CalendarIcon } />
            <DropdownItem value={ 3 } text={ 'Three' } Icon={ CalendarIcon } />
            <DropdownItem value={ 1 } text={ 'One' } Icon={ CalendarIcon } />
        </Dropdown>
        <SelectBox handleSelect={ (value) => console.log('the new value is', value) } defaultValue={ 1 }>
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
