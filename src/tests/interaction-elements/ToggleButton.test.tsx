import React from 'react';
import { render } from '@testing-library/react';

import ToggleButton from 'components/interaction-elements/ToggleButton/ToggleButton';
import ToggleButtonItem from 'components/interaction-elements/ToggleButton/ToggleButtonItem';

describe('ToggleButton', () => {
    test('renders the ToggleButton component with default props', () => {
        render(
            <ToggleButton>
                <ToggleButtonItem
                    value={ 1 } text="Option 1" />
                <ToggleButtonItem
                    value={ 2 } text="Option 2" />
                <ToggleButtonItem
                    value={ 3 } text="Option 3" />
            </ToggleButton>
        );
    });
});
