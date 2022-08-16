import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from 'components/selection-elements/Dropdown/Dropdown';
import DropdownItem from 'components/selection-elements/Dropdown/DropdownItem';

describe('Dropdown', () => {
    test('renders the Dropdown component with default props', () => {
        render(
            <Dropdown>
                <DropdownItem value={ 5 } name={ 'Five' } />
                <DropdownItem value={ 3 } name={ 'Three' } />
                <DropdownItem value={ 1 } name={ 'One' } />
            </Dropdown>
        );
    });
});
