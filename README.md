<br>
<br>
<br>
<div align="center">
  <img alt="Tremor Logo" src="images/tremor-light.svg" height="50"/>
<br>
<br>
<br>

  <div align="center"'>
    <a href="#">
      <img alt="View Storybook" src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" height="20" width="auto">
    </a>
    <a href="https://www.npmjs.com/package/@tremor/react">
        <img alt="npm package" src="https://img.shields.io/badge/-npm-0f172a?logo=npm&logoColor=red&style=flat" height="20" width="auto">
    </a>
    <a href="https://twitter.com/tremorlabs">
      <img alt="Follow on twitter" src="https://img.shields.io/twitter/follow/tremorlabs?style=flat&color=5C9BA1" height="20" width="auto">
    </a>
    <a href="#">
      <img alt="Read the documentation" src="https://img.shields.io/badge/Docs-blue?style=flat&logo=readthedocs&labelColor=5c5c5c&color=5C9BA1" height="20" width="auto">
    </a>
    <a href="https://github.com/tremorlabs/tremor/blob/main/License">
      <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat&color=5C9BA1" height="20" width="auto">
    </a>
  </div>

<br>

  <h1>The react library to build dashboards fast</h1>

</div>

[Tremor](https://tremor.so/) lets you create simple and modular components to build insightful dashboards in a breeze. Fully open-source, made by data scientists and software engineers with a sweet spot for design.

<br>
<br>

![Tremor Banner](images/banner2.png)

<br>
<br>

## Getting started

To get started with tremor, follow these steps:

1. Create a react app
    ```bash
    npx create-react-app my-app
    cd my-app
    ```

2. Install tremor using NPM

    ```bash
    npm install @tremor/react
    ```

**💡 Hint:** If you want to see how you can build your first dashboard, have a look at our [documentation](#).
<br>
<br>

## Example

With tremor creating an analyticl interface is easy.
<br>
<br>

Card.tsx
```jsx
// example of component composition

import { Card, Title, Metric, Text, Bold, ProgressBar } from "@tremor/react";

<Card>
    <Title title="Ticket Sales"/>
    <Metric value="$ 71,465"/>
        <Flex>
            <Text><Bold>32%</Bold>of annual target</Text>
            <Text>$ 223,328</Text>
        </Flex>
    <ProgressBar widthPercentage="32%"/>
</Card>
```
<br>

![Tremor Banner](images/example.png)

<br>

## Community and Contribution

We are always looking for new ideas or other ways to improve tremor. If you have developed anything cool or found bug, send us a pull request.
<br>
<br>

## License

[Apache License 2.0](https://github.com/tremorlabs/tremor/blob/main/License)

Copyright (c) 2022 Tremor.