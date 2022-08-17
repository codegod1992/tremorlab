import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Accordion from 'components/layout-elements/Accordion/Accordion';
import AccordionBody from 'components/layout-elements/Accordion/AccordionBody';
import AccordionHeader from 'components/layout-elements/Accordion/AccordionHeader';
import AccordionList from 'components/layout-elements/Accordion/AccordionList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/AccordionList',
    component: AccordionList,
} as ComponentMeta<typeof AccordionList>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof AccordionList> = () => (
    <AccordionList>
        <Accordion>
            <AccordionHeader>Hello</AccordionHeader>
            <AccordionBody>Whats'up</AccordionBody>
        </Accordion>
        <Accordion>
            <AccordionHeader>Hello</AccordionHeader>
            <AccordionBody>Whats'up</AccordionBody>
        </Accordion>
        <Accordion>
            <AccordionHeader>Hello</AccordionHeader>
            <AccordionBody>Whats'up</AccordionBody>
        </Accordion>
    </AccordionList>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
