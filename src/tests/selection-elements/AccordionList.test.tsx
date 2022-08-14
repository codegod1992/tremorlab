import React from 'react';
import { render } from '@testing-library/react';

import Accordion from 'components/selection-elements/Accordion/Accordion';
import AccordionBody from 'components/selection-elements/Accordion/AccordionBody';
import AccordionHeader from 'components/selection-elements/Accordion/AccordionHeader';
import AccordionList from 'components/selection-elements/Accordion/AccordionList';

describe('AccordionList Default', () => {
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
