import React from 'react';
import { render } from '@testing-library/react';

import BodyValue from 'components/text-elements/BodyValue';

describe('BodyValue', () => {
    test('renders the BodyValue component', () => {
        render(
            <BodyValue value="Metric" />
        );
    });
});
