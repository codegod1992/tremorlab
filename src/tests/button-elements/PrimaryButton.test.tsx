/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import PrimaryButton from 'components/button-elements/PrimaryButton';

describe('PrimaryButton', () => {
    test('renders the PrimaryButton component', () => {
        render(
            <PrimaryButton
                text="Button Text"
                handleClick={()=>console.log('clicked')}
            />
        );
    });
});
