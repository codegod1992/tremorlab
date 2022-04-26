import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, List, ListItem } from 'components';
import Accordion from 'components/selection-elements/Accordion/Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/SelectionElements/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Accordion> = (args) => (
    <List>
        <ListItem>
            <Accordion iconPosition="right">
                <div>Hello</div>
                <div>Whats'up</div>
            </Accordion>
        </ListItem>
        <ListItem>
            <Accordion>
                <div>Hello</div>
                <div>Whats'up</div>
            </Accordion>
        </ListItem>
    </List>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
