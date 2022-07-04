import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, Col, ColGrid, TrmAreaChart } from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ChartElements/TrmAreaChart',
    component: TrmAreaChart,
} as ComponentMeta<typeof TrmAreaChart>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TrmAreaChart> = (args) => (
    <ColGrid>
        <Col>
            <Card hFull={ true } >
                <div className="h-96">
                    <TrmAreaChart { ...args } />
                </div>
            </Card>
        </Col>
    </ColGrid>
);
  

const data = [
    {
        name: 'Jan 21\'',
        Sales: 4000,
    },
    {
        name: 'Feb 21\'',
        Sales: 3000,
    },
    {
        name: 'Mar 21\'',
        Sales: 2000,
    },
    {
        name: 'Apr 21\'',
        Sales: 2780,
    },
    {
        name: 'May 21',
        Sales: 1890,
    },
    {
        name: 'Jun 21\'',
        Sales: 2390,
    },
    {
        name: 'Jul 21\'',
        Sales: 3490,
    },
];

const dataFormater = (number: number) => {
    return Intl.NumberFormat('us').format(number).toString() + ' $';
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: data,
    attributes: [ 'Sales' ],
    valueFormaterY: dataFormater,
};
