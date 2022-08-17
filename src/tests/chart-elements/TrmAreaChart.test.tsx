/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmAreaChart from 'components/chart-elements/TrmAreaChart/TrmAreaChart';

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

describe('TrmAreaChart', () => {
    test('renders the TrmAreaChart component with default props', () => {
        render(
            <TrmAreaChart
                data={data}
                categories={[ 'Sales' ]}
                dataKey="month"
            />
        );
    });
});
