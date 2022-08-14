/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ButtonInline from 'components/button-elements/ButtonInline';

describe('ButtonInline Default', () => {
    test('renders the ButtonInline component with default props', () => {
        render(
            <ButtonInline
                text={ 'ButtonInline' }
            />
        );
    });
});
