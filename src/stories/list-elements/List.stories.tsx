import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flex from 'components/layout-elements/Flex/Flex';
import List from 'components/list-elements/List/List';
import ListItem from 'components/list-elements/ListItem/ListItem';
import ListValue from 'components/list-elements/ListValue/ListValue';

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
                <ListValue 
                    primary="Lorem Ipsum is simply dummy text of the printing"
                    secondary="World" truncate={ true }/>
                <ListValue primary="Hello" secondary="World" truncate={ false }/>
            </Flex>
            <Flex truncate={ true }>
                <ListValue primary="Lorem Ipsum" secondary="World" truncate={ true }/>
                <ListValue primary="Hello" secondary="World" truncate={ true }/>
            </Flex>
        </ListItem>
        <ListItem spaceX="">
            <Flex truncate={ false }>
                <ListValue 
                    primary="Lorem Ipsum is simply dummy text of the printing"
                    secondary="World" truncate={ false }/>
                <ListValue primary="Hello" secondary="World" truncate={ false }/>
            </Flex>
            <Flex truncate={ false }>
                <ListValue primary="Lorem Ipsum" secondary="World" truncate={ false }/>
                <ListValue primary="Hello" secondary="World" truncate={ false }/>
            </Flex>
        </ListItem>
    </List>
);

const SimpleTemplate: ComponentStory<typeof List> = (args) => (
    <List {...args}>
        <ListItem spaceX="space-x-10">
            <ListValue 
                primary="Achilleas Georgios Mitrotasios"
                secondary="World"
                truncate={ true }
            />
            <ListValue primary="1000000000000000" secondary="World" truncate={ false } textAlignment="text-right"/>
        </ListItem>
        <ListItem spaceX="">
            <ListValue primary="Lorem Ipsum" secondary="World" truncate={ false }/>
            <ListValue primary="Hello" secondary="World" truncate={ false } textAlignment="text-right"/>
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
