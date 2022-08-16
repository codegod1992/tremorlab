import React from 'react';
import { render } from '@testing-library/react';

import Accordion from 'components/interaction-elements/Accordion/Accordion';
import AccordionBody from 'components/interaction-elements/Accordion/AccordionBody';
import AccordionHeader from 'components/interaction-elements/Accordion/AccordionHeader';
import AccordionList from 'components/interaction-elements/Accordion/AccordionList';

describe('AccordionList', () => {
    test('renders the AccordionList component with default props', () => {
        render(
            <AccordionList>
                <Accordion>
                    <AccordionHeader>Hello</AccordionHeader>
                    <AccordionBody>World</AccordionBody>
                </Accordion>
                <Accordion>
                    <AccordionHeader>Hello</AccordionHeader>
                    <AccordionBody>World</AccordionBody>
                </Accordion>
                <Accordion>
                    <AccordionHeader>Hello</AccordionHeader>
                    <AccordionBody>World</AccordionBody>
                </Accordion>
            </AccordionList>
        );
    });
});
