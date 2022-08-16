/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import CategoryBar from 'components/vis-elements/CategoryBar';

describe('CategoryBar', () => {
    test('renders the CategoryBar component with default props', () => {
        render(
            <CategoryBar categories={[
                [10, 'emerald'],
                [25, 'yellow'],
                [45, 'orange'],
                [20, 'rose'],
            ]}
            />
        );
    });
});
