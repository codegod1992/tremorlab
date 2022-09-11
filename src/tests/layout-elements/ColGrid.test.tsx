import React from 'react';
import { render } from '@testing-library/react';

import ColGrid from 'components/layout-elements/ColGrid/ColGrid';

describe('ColGrid', () => {
    test('renders the ColGrid component with default props', () => {
        render(
            <ColGrid>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </ColGrid>);
    });
});
