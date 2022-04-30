import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Colors } from '@utils/component-utils';
import { Title } from 'components';

import IconCircled from 'components/icon-elements/IconCircled/IconCircled';
import IconLight from 'components/icon-elements/IconLight/IconLight';
import IconNeutral from 'components/icon-elements/IconNeutral/IconNeutral';
import IconShadow from 'components/icon-elements/IconShadow/IconShadow';
import IconSolid from 'components/icon-elements/IconSolid/IconSolid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/IconColors',
    component: IconNeutral,
} as ComponentMeta<typeof IconNeutral>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Icon = ArrowUpLineIcon;

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <Title text="Icon Neutral"/>
            <div className="grid grid-cols-8">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <IconNeutral Icon={ Icon } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Light"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <IconLight Icon={ Icon } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Shadow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <IconShadow Icon={ Icon } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Solid"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <IconSolid Icon={ Icon } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Circled"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <IconCircled Icon={ Icon } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
