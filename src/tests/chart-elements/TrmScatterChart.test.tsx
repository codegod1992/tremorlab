/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmScatterChart from 'components/chart-elements/TrmScatterChart/TrmScatterChart';

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
];

describe('TrmScatterChart', () => {
    test('renders the TrmScatterChart component with default props', () => {
        render(
            <TrmScatterChart
                data={data}
                categories={[ 'A' ]}
                attributeX="Weight"
                attributeY="Height"
                scoreAttribute="Score"
            />
        );
    });
});
