import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from 'components/selection-elements/Tab/Tab';
import TabList from 'components/selection-elements/TabList/TabList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/SelectionElements/TabList',
    component: TabList,
} as ComponentMeta<typeof TabList>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

type TabType = {
    id: string,
    name: string,
    isActive: boolean
}

const tabs = [
    { id: 'tremor.so', name: 'tremor.so', isActive: true },
    { id: 'thealchly.com', name: 'thealchly.com', isActive: false },
    { id: 'nac.com', name: 'nac.coom', isActive: false }
];

const setActiveTab = (activeTabId: string, tabs: TabType[]) => {
    return tabs.map(tab => (
        tab.id === activeTabId ? {...tab, isActive: true} : {...tab, isActive: false}
    ))
}

const TabComponent = () => {
    const [tabState, setTabState] = useState(setActiveTab('tremor.so', tabs));

    const handleChange = (e) => {
        setTabState(setActiveTab(e.target.value, tabs))
    };

    return(
        <TabList>
            {tabState.map((item, idx) => (
                <Tab
                    key={ idx }
                    text={ item.name }
                    value={ item.id }
                    isActive={ item.isActive }
                    handleChange={ handleChange }
                />
            ))}
        </TabList>
    );
};

const Template: ComponentStory<typeof TabComponent> = (args) => (
    <TabComponent />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
