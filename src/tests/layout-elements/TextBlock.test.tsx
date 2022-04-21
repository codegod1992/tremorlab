import React from 'react';
import { render } from '@testing-library/react';

import TextBlock from 'components/layout-elements/TextBlock';

describe('TextBlock', () => {
    test('renders the TextBlock component', () => {
        render(
            <TextBlock>
                <p>Hello</p>
                <p>World</p>
            </TextBlock>);
    });
});
