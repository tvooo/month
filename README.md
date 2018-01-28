# vector-month

[![Greenkeeper badge](https://badges.greenkeeper.io/tvooo/vector-month.svg)](https://greenkeeper.io/)

> A React component for simple calendar layouts using SVG

[![Build Status](https://travis-ci.org/tvooo/vector-month.svg?branch=master)](https://travis-ci.org/tvooo/vector-month)

## Preview

(Screenshot)

(Demo)

## Getting started

```sh
npm install --save vector-month
```

```js
import React from 'react';
import Month from 'vector-month'

const App = () => (
  <Month month={new Date()} />
);
```

## Props

* month _instanceOf(Date)_ - the month to display
* marked _func_ - takes `date` as an argument and returns whether a day should be highlighted or not
* dayColor _string_
* dayTodayColor _string_
* dayMarkedColor _string_

## License

MIT License
