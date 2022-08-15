import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DeltaTypes, Sizes } from '@utils/objects';
import BadgeDelta from 'components/icon-elements/BadgeDelta/BadgeDelta';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeDelta',
    component: BadgeDelta,
} as ComponentMeta<typeof BadgeDelta>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeDelta> = (args) => (
    <div className="grid grid-cols-4">
        <div>
            <p>Sizes</p>
            { Object.values(Sizes).map(size => (
                <div className="mt-2">
                    <BadgeDelta {...args} size={ size } />
                </div>
            )) }
        </div>
        <div>
            <p>DeltaTypes</p>
            { Object.values(DeltaTypes).map(deltaType => (
                <div className="mt-2">
                    <BadgeDelta {...args} deltaType={ deltaType } />
                </div>
            )) }
        </div>
        <div>
            <p>DeltaTypes IsIncreasePositive False</p>
            { Object.values(DeltaTypes).map(deltaType => (
                <div className="mt-2">
                    <BadgeDelta {...args} deltaType={ deltaType } isIncreasePositive={ false } />
                </div>
            )) }
        </div>
        <div>
            <p>DeltaTypes Icon Only</p>
            { Object.values(DeltaTypes).map(deltaType => (
                <div className="mt-2">
                    <BadgeDelta deltaType={ deltaType } isIncreasePositive={ false } />
                </div>
            )) }
        </div>
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    text: '12.5%',
    deltaType: DeltaTypes.Increase,
    tooltip: 'Tooltip'
};
