import React from 'react';
import isWeekend from 'date-fns/is_weekend';

import Month from '..';

class App extends React.Component {
  constructor () {
    super()

  }
  render () {
    return (
      <div >
        Future, Past, Weekends, Public Holidays?, Friday 13th,
        <Month
          month={new Date()}
          marked={isWeekend}
        />
      </div>
    )
  }
}

export default App;
