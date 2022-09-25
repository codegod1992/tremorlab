import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { 
    BadgeDelta,
    Button,
    Card,
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

const Template: ComponentStory<typeof Card> = () => (
    <div className="tr-grid tr-grid-cols-3 tr-gap-x-3">
        <Card>
            <Flex>
                <Title>
                    Ticket Sales
                </Title>
                <BadgeDelta text="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle>
                April 2021
            </Subtitle>
            <div style={{'marginTop': '10px'}}>
                <Metric>
                    21.345
                </Metric>
            </div>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.
            </Text>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>12.3%</Text>
                        <Text>E 20.000</Text>
                    </Flex>
                    <Text truncate={ true }>$ 20.000 USD</Text>
                </Flex>
            </div>
            <div style={{'marginTop': '5px'}}>
                <ProgressBar percentageValue={50} />
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
                <Title>
                    Ticket Sales
                </Title>
                <BadgeDelta text="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle>
                April 2021
            </Subtitle>
            <div style={{'marginTop': '10px'}}>
                <Metric>
                    21.345
                </Metric>
            </div>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            </Text>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                    </Flex>
                    <Text>20.000</Text>
                </Flex>
                <div style={{'marginTop': '5px'}}>
                    <ProgressBar percentageValue={50} />
                </div>
            </div>
            <Footer>
                <Button text="Button Text" handleClick={handleClick} size="xs" />
            </Footer>
        </Card>
        <Card>
            <Flex>
                <Title>
                    Ticket Sales
                </Title>
                <BadgeDelta text="20.1%" deltaType="decrease" isIncreasePositive={ false } />
            </Flex>
            <Subtitle>
                April 2021
            </Subtitle>
            <div style={{'marginTop': '10px'}}>
                <Metric>
                    21.345
                </Metric>
            </div>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.
            </Text>
            <div style={{'marginTop': '20px'}}>
                <Flex>
                    <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-2">
                        <Text>20.000</Text>
                    </Flex>
                    <Text>20.000</Text>
                </Flex>
                <div style={{'marginTop': '5px'}}>
                    <DeltaBar percentageValue={75} />
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
