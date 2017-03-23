# vector-month

> A React component for simple calendar layouts using SVG

## Preview

(Screenshot)

(Demo)

## Getting started

```sh
npm install --save vector-month
```

```js
var React = require('react');
var Icon = require('react-geomicons');

module.exports = React.createClass({
  render: function() {
    <MyComponent>
      <Icon name="bookmark" />
    </MyComponent>
  }
});
```

## Props

* month _instanceOf(Date)_ - the month to display
* marked _func_ - takes `date` as an argument and returns whether a day should be highlighted or not
* dayColor _string_
* dayTodayColor _string_
* dayMarkedColor _string_

## License

MIT License
