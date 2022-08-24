import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseColors } from 'lib/primitives';
import { SizeTypes } from 'lib/primitives';

import { ArrowUpIcon } from 'assets';
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
            <div className="grid grid-cols-1 gap-2">
                { Object.values(SizeTypes).map(size => (
                    <div className="flex justify-start space-x-4">
                        <Badge size={ size } text={ 'Live' } tooltip={ 'Tooltip' } />
                        <Badge size={ size } text={ 'Live' } Icon={ArrowUpIcon} tooltip={ 'Tooltip' } />
                    </div>
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
