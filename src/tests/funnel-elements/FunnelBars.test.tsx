/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import FunnelBars from 'components/funnel-elements/FunnelBars';

describe('FunnelBars', () => {
    test('renders the FunnelBars component', () => {
        render(
            <FunnelBars
                widthPercentageList={[
                    100, 70, 30
                ]}
            />
        );
    });
});
