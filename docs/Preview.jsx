import React, { Component } from 'react';
import isWeekend from 'date-fns/is_weekend';
import isPast from 'date-fns/is_past';
import isFuture from 'date-fns/is_future';

import Month from '..';

const MonthContainer = props => (
  <div
    style={{
      width: '25%',
      minWidth: '200px',
      padding: '1rem',
      boxSizing: 'border-box',
    }}
  >
    <Month {...props} />
  </div>
);

const markedFunc = {
  weekend: isWeekend,
  past: isPast,
  future: isFuture,
  friday: date => (date.getMonth() === 11 && ([25, 26, 31].indexOf(date.getDate()) > -1)),
};

class Preview extends Component {
  constructor() {
    super();

    this.state = {
      marked: 'weekend',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(marked) {
    this.setState({ marked });
  }

  render() {
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const { marked } = this.state;
    const cx = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    };
    return (
      <div>
        <div style={cx}>
          { months.map(month => <MonthContainer
            key={`month-${month}`}
            month={new Date(2017, month)}
            marked={markedFunc[this.state.marked]}
          />)}
        </div>
        <form>
          <legend>Highlight</legend>
          <input type="radio" name="marked" value="weekend" id="rd-weekend" checked={marked === 'weekend'} onChange={() => this.handleChange('weekend')} />
          <label htmlFor="rd-weekend">Weekends</label>
          <input type="radio" name="marked" value="future" id="rd-future" checked={marked === 'future'} onChange={() => this.handleChange('future')} />
          <label htmlFor="rd-future">Future</label>
          <input type="radio" name="marked" value="Past" id="rd-Past" checked={marked === 'past'} onChange={() => this.handleChange('past')} />
          <label htmlFor="rd-Past">Past</label>
          <input type="radio" name="marked" value="friday" id="rd-friday" checked={marked === 'friday'} onChange={() => this.handleChange('friday')} />
          <label htmlFor="rd-friday">Public holidays</label>
        </form>
      </div>
    );
  }
}

export default Preview;
