import React from 'react';
import { render } from '@testing-library/react';

import Datepicker from 'components/selection-elements/Datepicker';

describe('Datepicker Default', () => {
    test('renders the Datepicker component with default props', () => {
        render(<Datepicker />);
    });
});
