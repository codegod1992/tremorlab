import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Sizes } from '@utils/objects';
import { Title } from 'components';

import Icon, { IconVariants } from 'components/icon-elements/Icon/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/IconSizes',
    component: Icon,
} as ComponentMeta<typeof Icon>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const MyIcon = ArrowUpLineIcon;

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <Title>
                Icon Simple
            </Title>
            <div className="grid grid-cols-8 justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Simple } size={ Sizes[key] } info="Icon Info" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title>
                Icon Light
            </Title>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Light } size={ Sizes[key] } info="Icon Info" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title>
                Icon Shadow
            </Title>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Shadow } size={ Sizes[key] } info="Icon Info" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title>
                Icon Solid
            </Title>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Solid } size={ Sizes[key] } info="Icon Info" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title>
                Icon Outlined
            </Title>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Outlined } size={ Sizes[key] } info="Icon Info" />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
