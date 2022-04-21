import React from 'react';
import { render } from '@testing-library/react';

import Subtitle from 'components/text-elements/Subtitle';

describe('Subtitle', () => {
    test('renders the Subtitle component', () => {
        render(
            <Subtitle text="Subtitle" />
        );
    });
});
