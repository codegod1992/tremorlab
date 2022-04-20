import React from 'react';
import { render } from '@testing-library/react';

import MainMetric from 'components/text-elements/MainMetric';

describe('MainMetric', () => {
    test('renders the MainMetric component', () => {
        render(
            <MainMetric value="Metric" />
        );
    });
});
