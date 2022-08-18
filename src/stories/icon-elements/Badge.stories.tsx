import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseColors } from 'lib/objects';
import { Sizes } from 'lib/objects';

import Badge from 'components/icon-elements/Badge/Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Badge> = () => (
    <>
        <div>
            <p>Sizes</p>
            <div className="flex justify-start space-x-4">
                { Object.values(Sizes).map(size => (
                    <>
                        <Badge size={ size } text={ 'Live' } tooltip={ 'Tooltip' } />
                    </>
                )) }
            </div>
        </div>
        <div>
            <p>Colors</p>
            <div className="grid grid-cols-8 gap-2">
                { Object.values(BaseColors).map(color => (
                    <div>
                        <Badge color={ color } text={ 'Live' } tooltip={ 'Tooltip' } />
                    </div>
                )) }
            </div>
        </div>
    </>
);


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
