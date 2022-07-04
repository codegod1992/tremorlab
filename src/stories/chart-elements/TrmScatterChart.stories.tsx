

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, Col, ColGrid, TrmScatterChart } from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ChartElements/TrmScatterChart',
    component: TrmScatterChart,
} as ComponentMeta<typeof TrmScatterChart>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TrmScatterChart> = (args) => (
    <Card hFull={ true } maxWidth="max-w-2xl" >
        <div className="h-96">
            <TrmScatterChart { ...args } />
        </div>
    </Card>
);


const data = [
    [
        {
            'x': 100,
            'y': 200,
            'z': 200
        },
        {
            'x': 120,
            'y': 100,
            'z': 260
        },
        {
            'x': 140,
            'y': 300,
            'z': 400
        },
        {
            'x': 150,
            'y': 250,
            'z': 280
        },
        {
            'x': 170,
            'y': 400,
            'z': 500
        },
        {
            'x': 210,
            'y': 280,
            'z': 200
        },
        {
            'x': 130,
            'y': 180,
            'z': 800
        },
        {
            'x': 190,
            'y': 290,
            'z': 100
        }
    ],
    [
        {
            'x': 50,
            'y': 100,
            'z': 100
        },
        {
            'x': 20,
            'y': 50,
            'z': 160
        },
        {
            'x': 40,
            'y': 140,
            'z': 300
        },
        {
            'x': 50,
            'y': 150,
            'z': 180
        },
        {
            'x': 70,
            'y': 300,
            'z': 300
        },
        {
            'x': 110,
            'y': 180,
            'z': 100
        },
        {
            'x': 10,
            'y': 90,
            'z': 300
    
        },
        {
            'x': 20,
            'y': 310,
            'z': 100
        },
        {
            'x': 165,
            'y': 120,
            'z': 500
        },
        {
            'x': 160,
            'y': 150,
            'z': 1000
        },
        {
            'x': 205,
            'y': 70,
            'z': 200
        }
         
    ]

];

const dataFormater = (number: number) => {
    return Intl.NumberFormat('us').format(number).toString() + ' $';
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: data,
    attributes: ['Stature', 'Weight'],
    referenceLineX: { position: 142, label: 'Ø: 142cm'  },
    referenceLineY: { position: 160, label: 'Ø: 160kg'  },
    valueFormaterX: (value) => value + ' cm',
    valueFormaterY: (value) => value + ' kg',
};
