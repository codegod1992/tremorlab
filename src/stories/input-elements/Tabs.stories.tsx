import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from 'components/input-elements/Tab/Tab';
import TabList from 'components/input-elements/Tab/TabList';

import { BaseColors } from 'lib/primitives';
import { Card } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/TabList',
    component: TabList,
} as ComponentMeta<typeof TabList>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TabList> = () => (
    <>
        { Object.values(BaseColors).map(color => (
            <Card>
                <TabList defaultValue={ 1 } handleSelect={ (value) => console.log(value) } color={ color }>
                    <Tab value={ 1 } name="tremor.so" />
                    <Tab value={ 2 } name="thealchly.com" />
                    <Tab value={ 3 } name="nac.coom" />
                </TabList>
            </Card>
        ))}
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
