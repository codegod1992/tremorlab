import React from 'react';
import { render } from '@testing-library/react';

import Flex from 'components/Flex';

describe('Flex', () => {
    test('renders the Flex component', () => {
        render(
            <Flex>
                <div>Hello</div>
                <div>World</div>
            </Flex>);
    });
});
