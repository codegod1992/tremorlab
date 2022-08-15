import React from 'react';
import { render } from '@testing-library/react';

import Accordion from 'components/selection-elements/Accordion/Accordion';
import AccordionBody from 'components/selection-elements/Accordion/AccordionBody';
import AccordionHeader from 'components/selection-elements/Accordion/AccordionHeader';

describe('Accordion Default', () => {
    test('renders the Accordion component with default props', () => {
        render(
            <Accordion>
                <AccordionHeader><div>Hello</div></AccordionHeader>
                <AccordionBody><div>World</div></AccordionBody>
            </Accordion>
        );
    });
});
