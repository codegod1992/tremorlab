import React from 'react';
import { render } from '@testing-library/react';

import List from 'components/list-elements/List';
import ListItem from 'components/list-elements/ListItem';
import ListValue from 'components/list-elements/ListValue';

describe('List', () => {
    test('renders the List component', () => {
        render(
            <List>
                <ListItem>
                    <ListValue primary="Hello World" />
                    <ListValue primary="Hello World" />
                </ListItem>
                <ListItem>
                    <ListValue primary="Hello World" />
                    <ListValue primary="Hello World" />
                </ListItem>
            </List>
        );
    });
});
