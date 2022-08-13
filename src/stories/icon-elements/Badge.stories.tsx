import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseColors } from '@utils/objects';
import { Sizes } from '@utils/objects';

import Badge from 'components/icon-elements/Badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Badge> = () => (
    <>
        { Object.values(Sizes).map(size => (
            <>
                <Badge size={ size } text={ 'Live' } />
            </>
        )) }
        { Object.values(BaseColors).map(color => (
            <div>
                <Badge color={ color } text={ 'Live' } />
            </div>
        )) }
    </>
);


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
