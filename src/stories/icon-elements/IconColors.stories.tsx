import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Colors } from '@utils/component-utils';
import { Title } from 'components';

import { IconTypes } from 'components/icon-elements/Icon/Icon';

import Icon from 'components/icon-elements/Icon/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/IconColors',
    component: Icon,
} as ComponentMeta<typeof Icon>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const MyIcon = ArrowUpLineIcon;

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <Title text="Icon Neutral"/>
            <div className="grid grid-cols-8">
                {Object.keys(Colors).map(key => {
                    console.log(Colors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Simple } color={ Colors[key] } />
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
                        <Icon Icon={ MyIcon } style={ IconTypes.Light } color={ Colors[key] } />
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
                        <Icon Icon={ MyIcon } style={ IconTypes.Shadow } color={ Colors[key] } />
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
                        <Icon Icon={ MyIcon } style={ IconTypes.Solid } color={ Colors[key] } />
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
                        <Icon Icon={ MyIcon } style={ IconTypes.Circled } color={ Colors[key] } />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
