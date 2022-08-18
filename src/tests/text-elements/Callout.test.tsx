import React from 'react';
import { render } from '@testing-library/react';

import CallOut from 'components/text-elements/CallOut';

describe('CallOut', () => {
    test('renders the CallOut component with default props', () => {
        render(
            <CallOut
                title="Performance Metric"
                text={
                    `You are outranking 83% of the sales representatives in your cohort. Sit repellendus qui ut at
                    blanditis et quo et molestiae. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
                    repellendus qui ut at blanditiis et quo et molestiae`
                }
            />
        );
    });
});
