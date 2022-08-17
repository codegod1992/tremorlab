/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmLineChart from 'components/chart-elements/TrmLineChart/TrmLineChart';

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

describe('TrmLineChart', () => {
    test('renders the TrmLineChart component with default props', () => {
        render(
            <TrmLineChart
                data={data}
                categories={[ 'Sales' ]}
                dataKey="month"
            />
        );
    });
});
