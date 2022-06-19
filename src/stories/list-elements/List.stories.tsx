import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flex from 'components/layout-elements/Flex/Flex';
import List from 'components/list-elements/List/List';
import ListItem from 'components/list-elements/ListItem/ListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ListElements/List',
    component: List,
} as ComponentMeta<typeof List>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof List> = (args) => (
    <List {...args}>
        <ListItem spaceX="space-x-8">
            <Flex truncate={ true }>
            </Flex>
            <Flex truncate={ true }>
            </Flex>
        </ListItem>
        <ListItem spaceX="">
            <Flex truncate={ false }>
            </Flex>
            <Flex truncate={ false }>
            </Flex>
        </ListItem>
    </List>
);

const SimpleTemplate: ComponentStory<typeof List> = (args) => (
    <List {...args}>
        <ListItem spaceX="space-x-10">
        </ListItem>
        <ListItem spaceX="">
        </ListItem>
    </List>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    divideY: 'divide-y',
    children: undefined
};

export const SimpleList = SimpleTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleList.args = {
    divideY: 'divide-y',
    children: undefined
};
