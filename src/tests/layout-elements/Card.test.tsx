import React from 'react';
import { render } from '@testing-library/react';

import Card from 'components/layout-elements/Card';

describe('Card', () => {
    test('renders the Card component', () => {
        render(
            <Card>
                <div>Hello</div>
                <div>World</div>
            </Card>);
    });
});
