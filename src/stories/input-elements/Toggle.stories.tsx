import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from 'components/input-elements/Toggle/Toggle';
import { ToggleItem } from 'components';

import { BaseColors } from 'lib/primitives';
import { CalendarIcon } from 'assets';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Toggle> = () => (
    <div>
        <Toggle defaultValue={ 1 } handleSelect={ (value) => console.log(value) }>
            <ToggleItem
                value={ 1 } text="Option 1" Icon={ CalendarIcon } />
            <ToggleItem
                value={ 2 } text="Option 2" Icon={ CalendarIcon } />
            <ToggleItem
                value={ 3 } text="Option 3" Icon={ CalendarIcon } />
        </Toggle>
        <div className="tr-mt-5">
            { Object.values(BaseColors).map(color => (
                <div className="tr-mb-2">
                    <Toggle
                        defaultValue={ 1 } handleSelect={ (value) => console.log(value) } color={ color }>
                        <ToggleItem
                            value={ 1 } text="Option 1" Icon={ CalendarIcon } />
                        <ToggleItem
                            value={ 2 } text="Option 2" Icon={ CalendarIcon } />
                        <ToggleItem
                            value={ 3 } text="Option 3" Icon={ CalendarIcon } />
                    </Toggle>
                </div>
            ))}
        </div>
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
