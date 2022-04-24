import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import { Sizes } from '@common/component-utils';
import { Title } from 'components';

import { Flex } from 'components';

import {
    InlineButton,
    InlineButtonArrow,
    PrimaryButton,
    PrimaryButtonArrow,
    PrimaryButtonLeadingIcon,
    PrimaryButtonTrailingIcon,
    SecondaryButton,
    SecondaryButtonArrow,
    SecondaryButtonLeadingIcon,
    SecondaryButtonTrailingIcon,
} from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ButtonElements/ButtonSizes',
    component: Flex,
} as ComponentMeta<typeof Flex>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Icon = ArrowUpLineIcon;
const handleClick = () => console.log('clicked');
const buttonText = 'Button Text';

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <Title text="PrimaryButton"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <PrimaryButton text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="SecondaryButton"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <SecondaryButton text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="PrimaryButtonArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <PrimaryButtonArrow text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="SecondaryButtonArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <SecondaryButtonArrow text={ buttonText } size={ Sizes[key] } handleClick={ handleClick } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="PrimaryButtonLeadingIcon"/>
            <div className="grid grid-cols-8 justify-items-start items-center gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <PrimaryButtonLeadingIcon
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="SecondaryButtonLeadingIcon"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <SecondaryButtonLeadingIcon
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="PrimaryButtonTrailingIcon"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <PrimaryButtonTrailingIcon
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="SecondaryButtonTrailingIcon"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <SecondaryButtonTrailingIcon
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="InlineButton"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <InlineButton
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title text="InlineButtonArrow"/>
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <InlineButtonArrow
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
