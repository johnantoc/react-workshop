![Logo](https://via.placeholder.com/700x100/000000/ffffff?text=Image+List)

# React JS WorkShop

A image listing app.

## Features

- Functional Components
- Testcases with code coverage html report page generation.

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Tailwindcss](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapidly building custom user interfaces.
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities.

## Installation and Run locally on dev server

Clone the project.

```bash
  git clone https://github.com/johnantoc/react-workshop.git
```

Go to the project directory.

```bash
  cd react-workshop
```

Install dependencies.

```bash
  npm install
```

Start the dev server.

```bash
  npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running Tests

To run tests, run the following command

```bash
  npm test
```

Launches the test runner. Watch mode is set to false.\
Test coverage can be viewed from test_coverage/lcov-report/index.html.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## API Reference

#### Get images by page.

```https
  GET https://test.create.diagnal.com/data/page${num}.json
```

| Parameter | Type      | Description                |
| :-------- | :---      | :----------                |
| `num`     | `number`  | **Required**. page number  |
