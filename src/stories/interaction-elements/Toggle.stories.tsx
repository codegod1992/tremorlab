import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from 'components/interaction-elements/Toggle/Toggle';
import { ToggleItem } from 'components';

import { BaseColors } from 'lib/objects';
import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/Toggle',
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
        <div className="mt-5">
            { Object.values(BaseColors).map(color => (
                <div className="mb-2">
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
