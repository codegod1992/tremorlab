import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { BaseColors } from '@utils/objects';
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
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Simple } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Light"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Light } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Shadow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Shadow } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Solid"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Solid } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="Icon Circled"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } style={ IconTypes.Outlined } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
