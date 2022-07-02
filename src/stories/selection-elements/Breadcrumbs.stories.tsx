import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import BreadcrumbItem from 'components/selection-elements/BreadcrumbItem/BreadcrumbItem';
import Breadcrumbs from 'components/selection-elements/Breadcrumbs/Breadcrumbs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/SelectionElements/Breadcrumbs',
    component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Breadcrumbs maxItems={ 4 } currentHref="/b">
        <BreadcrumbItem name="Hello" href="/a" />
        <BreadcrumbItem name="World" href="/b" />
        <BreadcrumbItem name="This" href="/c" />
        <BreadcrumbItem name="Is" href="/d" />
        <BreadcrumbItem name="a" href="/e" />
        <BreadcrumbItem name="BreadcrumbBreadcrumbBreadcrumbBreadcrumbBreadcrumbBreadcrumbBreadcrumb" href="/f" />
    </Breadcrumbs>
);
  
export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {

};
