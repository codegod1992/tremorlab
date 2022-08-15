/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import MarkerBar from 'components/vis-elements/MarkerBar';

describe('MarkerBar Default', () => {
    test('renders the MarkerBar component with default props', () => {
        render(
            <MarkerBar
                percentageValue={50}
            />
        );
    });
});
