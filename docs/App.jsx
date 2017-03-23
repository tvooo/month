import React from 'react';
import isWeekend from 'date-fns/is_weekend';

import Preview from './Preview';
import Block from './Block';
import readme from '../README.md';

class App extends React.Component {
  constructor () {
    super()

  }
  render () {
    return (
      <div >
        <Block alt>
          <h1>Vector Month</h1>
          <Preview />
        </Block>
        <Block>
          <div className={'meh'}
dangerouslySetInnerHTML={{ __html: readme }} />
        </Block>

      </div>
    );
  }
}

export default App;
