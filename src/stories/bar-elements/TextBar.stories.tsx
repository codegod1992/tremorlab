import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextBar from 'components/bar-elements/TextBar/TextBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

import { BaseColors } from '@utils/objects';
import { Flex } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/TextBar',
    component: TextBar,
} as ComponentMeta<typeof TextBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TextBar> = (args) => (
    <>
        <TextBar label="Pages" attribute="Views" data={ args.data } />
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: [
        { name: '/home', value: 100000000 },
        { name: '/imprint', value: 351 },
        { name: '/cancellation', value: 271 },
        { name: '/special-offer-august-getsahdkjhagskdfjhgakshjgdfkjahsgdfjkgasdjkhfgajkshgdfjkhagsdkjhfgajhksdgfjkhasdgfjkhagsdjhkgfasjkdgfjkasdhgkjgfdsk', value: 191 },
        { name: '/documentation', value: 91 },
    ]
};
