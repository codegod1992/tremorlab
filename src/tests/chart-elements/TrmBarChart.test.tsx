/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmBarChart from 'components/chart-elements/TrmBarChart/TrmBarChart';

const data = [
    {
        month: 'Jan 21\'',
        Sales: 4000,
    },
    {
        month: 'Feb 21\'',
        Sales: 3000,
    },
    {
        month: 'Mar 21\'',
        Sales: 2000,
    },
    {
        month: 'Apr 21\'',
        Sales: 2780,
    },
    {
        month: 'May 21',
        Sales: 1890,
    },
    {
        month: 'Jun 21\'',
        Sales: 2390,
    },
    {
        month: 'Jul 21\'',
        Sales: 3490,
    },
];

describe('TrmBarChart', () => {
    test('renders the TrmBarChart component with default props', () => {
        render(
            <TrmBarChart
                data={data}
                categories={[ 'Sales' ]}
                dataKey="month"
            />
        );
    });
});
