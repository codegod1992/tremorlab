<br>
<br>
<br>
<div align="center">
  <img alt="Tremor Logo" src="images/tremor-light.svg" height="50"/>
<br>
<br>
<br>

  <div align="center">
    <a href="https://www.npmjs.com/package/@tremor/react">
        <img alt="npm package" src="https://img.shields.io/badge/-npm-0f172a?logo=npm&logoColor=red&style=flat" height="20" width="auto">
    </a>
    <a href="https://twitter.com/tremorlabs">
      <img alt="Follow on twitter" src="https://img.shields.io/twitter/follow/tremorlabs?style=flat&color=5C9BA1" height="20" width="auto">
    </a>
    <a href="https://tremor.so/docs/getting-started/introduction">
      <img alt="Read the documentation" src="https://img.shields.io/badge/Docs-blue?style=flat&logo=readthedocs&labelColor=5c5c5c&color=5C9BA1" height="20" width="auto">
    </a>
    <a href="https://github.com/tremorlabs/tremor/blob/main/License">
      <img alt="License Apache 2.0" src="https://img.shields.io/badge/license-Apache 2.0-blue.svg?style=flat&color=5C9BA1" height="20" width="auto">
    </a>
  </div>

<br>

  <h1>The react library to build dashboards fast</h1>

</div>

[Tremor](https://tremor.so/) lets you create simple and modular components to build insightful dashboards in a breeze. Fully open-source, made by data scientists and software engineers with a sweet spot for design.

<br>
<br>

![Tremor Banner](images/banner3.png)

<br>
<br>

## Getting Started

### 1. Create a Next.js project

We start by creating a new Next.js project with
[Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```bash
npx create-next-app my-project
cd my-project
```

### 2. Install Tailwind CSS

We install Tailwind CSS using npm and initialize the configuration files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Set template paths

We add the following paths to our `tailwind.config.js` file.

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add the Tailwind directives

We add the following directives to our `globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Install the tremor library

Install tremor from your command line via npm. And run our build process. Since we are in beta, please be
aware that there might be breaking changes in the future.

```bash
npm install @tremor/react
```

```bash
npm run dev
```

**💡 Hint:** If you want to see how you can build your first dashboard, have a look at our [documentation](https://tremor.so/docs/getting-started/demo-dashboard).

<br>
<br>

## Example

With tremor creating an analytical interface is easy.
<br>
<br>

```jsx
//Card.tsx
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

export default () => (
  <Card maxWidth="max-w-sm">
    <Text>Sales</Text>
    <Metric>$ 71,465</Metric>
    <Flex marginTop='mt-4'>
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
    </Flex>
    <ProgressBar percentageValue={ 32 } marginTop="mt-2" />
  </Card>
);
```
<br>

![Tremor Banner](images/example.png)

<br>

## Community and Contribution

We are always looking for new ideas or other ways to improve tremor. If you have developed anything cool or found a bug, send us a pull request.
<br>
<br>

## License

[Apache License 2.0](https://github.com/tremorlabs/tremor/blob/main/License)

Copyright &copy;  2022 Tremor. All rights reserved.
