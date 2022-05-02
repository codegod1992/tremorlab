import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { 
    BadgeDelta,
    Button,
    Caption,
    Card,
    ContentOverflow,
    DeltaBar,
    Flex,
    Footer,
    Metric,
    ProgressBar,
    Subtitle,
    Text,
    Title 
} from 'components';

const handleClick = () => (console.log('clicked'));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/Playground',
    component: Card,
} as ComponentMeta<typeof Card>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Card> = (args) => (
    <div className="grid grid-cols-3 gap-x-3">
        <Card>
            <Flex>
                <Title text="Ticket Sales" />
                <BadgeDelta delta="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle text="April 2021" />
            <div style={{'marginTop': '10px'}}>
                <Metric value="21.345"/>
            </div>
            <ContentOverflow>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </ContentOverflow>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                        <Caption>(50%)</Caption>
                    </Flex>
                    <Flex justifyContent="justify-end" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                        <Caption>(50%)</Caption>
                    </Flex>
                </Flex>
            </div>
            <div style={{'marginTop': '5px'}}>
                <ProgressBar widthPercentage={50} />
            </div>
            <Footer>
                <Flex justifyContent="justify-end" spaceX="space-x-2">
                    <Button text="Button Text" handleClick={handleClick} size="xs" importance="secondary" />
                    <Button text="Button Text" handleClick={handleClick} size="xs" />
                </Flex>
            </Footer>
        </Card>
        <Card>
            <Flex>
                <Title text="Ticket Sales" />
                <BadgeDelta delta="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle text="April 2021" />
            <div style={{'marginTop': '10px'}}>
                <Metric value="21.345"/>
            </div>
            <ContentOverflow>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                </Text>
            </ContentOverflow>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                        <Caption>(50%)</Caption>
                    </Flex>
                    <Text>20.000</Text>
                </Flex>
                <div style={{'marginTop': '5px'}}>
                    <ProgressBar widthPercentage={50} />
                </div>
            </div>
            <Footer>
                <Button text="Button Text" handleClick={handleClick} size="xs" />
            </Footer>
        </Card>
        <Card>
            <Flex>
                <Title text="Ticket Sales" />
                <BadgeDelta delta="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle text="April 2021" />
            <div style={{'marginTop': '10px'}}>
                <Metric value="21.345"/>
            </div>
            <ContentOverflow>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </ContentOverflow>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                        <Caption>(50%)</Caption>
                    </Flex>
                    <Text>20.000</Text>
                </Flex>
                <div style={{'marginTop': '5px'}}>
                    <DeltaBar widthPercentage={75} deltaType="increase" />
                </div>
            </div>
            <Footer>
                <Button text="Button Text" handleClick={handleClick} size="xs" />
            </Footer>
        </Card>
    </div>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: undefined
};
