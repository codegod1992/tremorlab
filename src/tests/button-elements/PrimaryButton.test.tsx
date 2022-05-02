/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Button from 'components/button-elements/Button';

describe('Button', () => {
    test('renders the Button component', () => {
        render(
            <Button
                text="Button Text"
                handleClick={()=>console.log('clicked')}
            />
        );
    });
});
