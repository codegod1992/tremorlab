import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components';

import { BaseColors } from '@utils/objects';
import { Sizes } from '@utils/objects';

import BadgeStatus from 'components/icon-elements/BadgeStatus/BadgeStatus';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeStatus',
    component: BadgeStatus,
} as ComponentMeta<typeof BadgeStatus>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeStatus> = (args) => (
    <>
        { Object.values(Sizes).map(size => (
            <>
                <BadgeStatus badgeSize={ size } text={ 'Live' } />
            </>
        )) }
        { Object.values(BaseColors).map(color => (
            <div>
                <BadgeStatus color={ color } text={ 'Live' } />
            </div>
        )) }
    </>
);


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
