import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, Col, ColGrid } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/LayoutElements/ColGrid',
    component: ColGrid,
} as ComponentMeta<typeof ColGrid>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ColGrid> = (args) => (
    <ColGrid {...args}>
        <Col numColSpan={ 2 }>
            <Card>
                <div className="h-44" />
            </Card>
        </Col>
        <Card>
            <div className="h-44" />
        </Card>
        <Col>
            <Card>
                <div className="h-44" />
            </Card>
        </Col>
        <Card>
            <div className="h-44" />
        </Card>
        <Card>
            <div className="h-44" />
        </Card>
    </ColGrid>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    numCols: 0,
    numColsMd: 3,
    gapX: 'gap-x-2',
    gapY: 'gap-y-2'
};
