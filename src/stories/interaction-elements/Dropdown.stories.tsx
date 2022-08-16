import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, DropdownItem } from 'components';
import Dropdown from 'components/interaction-elements/Dropdown/Dropdown';

import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Dropdown> = () => (
    <Card>
        <Dropdown handleSelect={ (value) => console.log('The selected value is', value) }>
            <DropdownItem value={ 5 } name={ 'Five' } Icon={ CalendarIcon } shortcut={ 'F' } />
            <DropdownItem value={ 3 } name={ 'Three' } Icon={ CalendarIcon } shortcut={ 'T' } />
            <DropdownItem value={ 1 } name={ 'One' } Icon={ CalendarIcon } shortcut={ 'O' } />
        </Dropdown>
    </Card>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
