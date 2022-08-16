import React from 'react';
import { render } from '@testing-library/react';

import Datepicker from 'components/interaction-elements/Datepicker';

describe('Datepicker', () => {
    test('renders the Datepicker component with default props', () => {
        render(<Datepicker />);
    });
});
