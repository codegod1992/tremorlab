/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import TrmLineChart from 'components/chart-elements/TrmLineChart/TrmLineChart';

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

describe('TrmLineChart Default', () => {
    test('renders the TrmLineChart component with default props', () => {
        render(
            <TrmLineChart
                height={300}
                data={data}
                categories={[ 'Sales' ]}
            />
        );
    });
});
