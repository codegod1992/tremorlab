import React from 'react';
import { render } from '@testing-library/react';

import Accordion from 'components/interaction-elements/Accordion/Accordion';
import AccordionBody from 'components/interaction-elements/Accordion/AccordionBody';
import AccordionHeader from 'components/interaction-elements/Accordion/AccordionHeader';

describe('Accordion', () => {
    test('renders the Accordion component with default props', () => {
        render(
            <Accordion>
                <AccordionHeader><div>Hello</div></AccordionHeader>
                <AccordionBody><div>World</div></AccordionBody>
            </Accordion>
        );
    });
});
