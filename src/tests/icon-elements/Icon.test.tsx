/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import Icon from 'components/icon-elements/Icon';

describe('Icon Default', () => {
    test('renders the Icon component with default props', () => {
        render(
            <Icon Icon={ ArrowUpLineIcon } />
        );
    });
});
