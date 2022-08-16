import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleButton from 'components/interaction-elements/ToggleButton/ToggleButton';
import { ToggleButtonItem } from 'components';

import { BaseColors } from '@utils/objects';
import { CalendarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/ToggleButton',
    component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ToggleButton> = () => (
    <div>
        <ToggleButton defaultValue={ 1 } handleSelect={ (value) => console.log(value) }>
            <ToggleButtonItem
                value={ 1 } text="Option 1" Icon={ CalendarIcon } />
            <ToggleButtonItem
                value={ 2 } text="Option 2" Icon={ CalendarIcon } />
            <ToggleButtonItem
                value={ 3 } text="Option 3" Icon={ CalendarIcon } />
        </ToggleButton>
        <div className="mt-5">
            { Object.values(BaseColors).map(color => (
                <div className="mb-2">
                    <ToggleButton
                        defaultValue={ 1 } handleSelect={ (value) => console.log(value) } color={ color }>
                        <ToggleButtonItem
                            value={ 1 } text="Option 1" Icon={ CalendarIcon } />
                        <ToggleButtonItem
                            value={ 2 } text="Option 2" Icon={ CalendarIcon } />
                        <ToggleButtonItem
                            value={ 3 } text="Option 3" Icon={ CalendarIcon } />
                    </ToggleButton>
                </div>
            ))}
        </div>
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
