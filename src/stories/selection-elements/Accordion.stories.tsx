import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Accordion from 'components/selection-elements/Accordion/Accordion';
import AccordionBody from 'components/selection-elements/AccordionBody/AccordionBody';
import AccordionHeader from 'components/selection-elements/AccordionHeader/AccordionHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/SelectionElements/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Accordion>
        <AccordionHeader><div>Hello</div></AccordionHeader>
        <AccordionBody><div>Whats'up</div></AccordionBody>
    </Accordion>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
