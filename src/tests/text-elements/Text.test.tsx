import React from 'react';
import { render } from '@testing-library/react';

import Text from 'components/text-elements/Text';

describe('Text', () => {
    test('renders the Text component', () => {
        render(
            <Text>
                Hello World
            </Text>);
    });
});
