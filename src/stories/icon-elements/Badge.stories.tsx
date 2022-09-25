import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseColors } from 'lib/primitives';
import { Sizes } from 'lib/primitives';

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
            <div className="tr-grid tr-grid-cols-1 tr-gap-2">
                { Object.values(Sizes).map(size => (
                    <div className="tr-flex tr-justify-start tr-space-x-4">
                        <Badge size={ size } text={ 'Live' } tooltip={ 'Tooltip' } />
                        <Badge size={ size } text={ 'Live' } Icon={ArrowUpIcon} tooltip={ 'Tooltip' } />
                    </div>
                )) }
            </div>
        </div>
        <div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8 tr-gap-2">
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
