/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from 'components/bar-elements/ProgressBar';

describe('ProgressBar', () => {
    test('renders the ProgressBar component', () => {
        render(
            <ProgressBar widthPercentage={50} />
        );
    });
});
