import React from 'react';
import { render } from '@testing-library/react';

import Caption from 'components/text-elements/Caption';

describe('Caption', () => {
    test('renders the Caption component', () => {
        render(
            <Caption>
                Hello World
            </Caption>);
    });
});
