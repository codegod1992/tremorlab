/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ButtonPrimary from 'components/button-elements/ButtonPrimary';

describe('ButtonPrimary', () => {
    test('renders the ButtonPrimary component', () => {
        render(
            <ButtonPrimary
                text="Button Text"
                handleClick={()=>console.log('clicked')}
            />
        );
    });
});
