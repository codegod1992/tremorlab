import React from 'react';
import { render } from '@testing-library/react';

import SelectBox from 'components/selection-elements/SelectBox/SelectBox';
import SelectBoxItem from 'components/selection-elements/SelectBox/SelectBoxItem';

describe('SelectBox', () => {
    test('renders the SelectBox component with default props', () => {
        render(
            <SelectBox>
                <SelectBoxItem value={1} name="Option One" />
                <SelectBoxItem value={2} name="Option Two" />
                <SelectBoxItem value={3} name="Option Three" />
            </SelectBox>
        );
    });
});
