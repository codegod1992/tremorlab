import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, TrmLineChart } from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ChartElements/TrmLineChart',
    component: TrmLineChart,
} as ComponentMeta<typeof TrmLineChart>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TrmLineChart> = (args) => (
    <Card hFull={ true } >
        <div className="h-96">
            <TrmLineChart { ...args } />
        </div>
    </Card>
);
  

const data = [
    {
        name: 'Jan 21\'',
        Sales: 4000,
        Profit: 2400,
    },
    {
        name: 'Feb 21\'',
        Sales: 3000,
        Profit: 1398,
    },
    {
        name: 'Mar 21\'',
        Sales: 2000,
        Profit: 900,
    },
    {
        name: 'Apr 21\'',
        Sales: 2780,
        Profit: 3908,
    },
    {
        name: 'May 21',
        Sales: 1890,
        Profit: 4800,
    },
    {
        name: 'Jun 21\'',
        Sales: 2390,
        Profit: 3800,
    },
    {
        name: 'Jul 21\'',
        Sales: 3490,
        Profit: 4300,
    },
];

const dataFormater = (number: number) => {
    return Intl.NumberFormat('us').format(number).toString() + ' $';
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: data,
    attributes: ['Sales', 'Profit'],
    valueFormaterY: dataFormater,
};
