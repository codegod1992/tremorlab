import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Datepicker from 'components/input-elements/Datepicker/Datepicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/Datepicker',
    component: Datepicker,
} as ComponentMeta<typeof Datepicker>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Datepicker> = () => (
    <div className="tr-flex tr-justify-end">
        <Datepicker
            maxWidth="max-w-sm"
            handleSelect={ (startDate: Date, endDate: Date) => console.log(startDate, endDate) }
            defaultStartDate={ new Date(2022, 6, 1) }
            defaultEndDate={ new Date(2022, 6, 20) }
            // minDate={ new Date(2022, 6, 1) }
            maxDate={ new Date(2022, 6, 20) }
        />
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
