import React from 'react';
import { render } from '@testing-library/react';

import BodyText from 'components/text-elements/BodyText';

describe('BodyText', () => {
    test('renders the BodyText component', () => {
        render(
            <BodyText>
                Hello World
            </BodyText>);
    });
});
