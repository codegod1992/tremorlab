import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowRightIcon } from 'assets';

import { BaseColors } from 'lib/primitives';

import { Flex } from 'components';

import {
    Button,
    ButtonInline,
} from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InteractionElements/ButtonColors',
    component: Flex,
} as ComponentMeta<typeof Flex>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Icon = ArrowRightIcon;
const handleClick = () => console.log('clicked');
const buttonText = 'Button Text';

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button
                            text={ buttonText }
                            color={ key }
                            handleClick={ handleClick } 
                            tooltip={ 'Button Info' } 
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button 
                            text={ buttonText }
                            color={ key }
                            handleClick={ handleClick }
                            importance="secondary" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button
                            text={ buttonText }
                            color={ key }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button
                            text={ buttonText }
                            color={ key }
                            handleClick={ handleClick }
                            importance="secondary"
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 justify-items-start items-center gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button
                            Icon={ Icon }
                            text={ buttonText }
                            color={ key }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <Button
                            Icon={ Icon }
                            text={ buttonText }
                            importance={ 'secondary' }
                            color={ key }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <ButtonInline
                            text={ buttonText }
                            Icon={ Icon }
                            color={ key }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="grid grid-cols-8 items-center justify-items-start gap-y-2">
                {Object.values(BaseColors).map(key => {
                    return(
                        <ButtonInline
                            text={ buttonText }
                            color={ key }
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
