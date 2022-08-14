/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmAreaChart from 'components/chart-elements/TrmAreaChart/TrmAreaChart';

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

describe('TrmAreaChart Default', () => {
    test('renders the TrmAreaChart component with default props', () => {
        render(
            <TrmAreaChart
                data={data}
                categories={[ 'Sales' ]}
            />
        );
    });
});
