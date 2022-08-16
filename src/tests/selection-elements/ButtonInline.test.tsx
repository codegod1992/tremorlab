/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ButtonInline from 'components/selection-elements/ButtonInline';

describe('ButtonInline', () => {
    test('renders the ButtonInline component with default props', () => {
        render(
            <ButtonInline
                text={ 'ButtonInline' }
            />
        );
    });
});
