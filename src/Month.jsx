import React, { PropTypes } from 'react';
import isToday from 'date-fns/is_today';

import Day from './Day';
import getDaysInMonth from './utils';

const Month = ({
  month,
  marked,
  ...rest
}) => {
  const daysInMonth = getDaysInMonth(month);

  console.log(daysInMonth);

  const viewBox = [
    0,
    0,
    25 * 9,
    25 * 6,
  ];

  return (
    <div>
      <svg
        className="month"
        viewBox={viewBox.join(' ')}
        preserveAspectRatio="xMidYMid meet"
      >
        {
          daysInMonth.map(date => (
            <Day
              key={date.toString()}
              date={date}
              today={isToday(date)}
              marked={marked ? marked(date) : false}
              {...rest}
            />
          ))
        }
      </svg>
    </div>
  );
};

Month.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  marked: PropTypes.func,
  dayColor: PropTypes.string,
  dayTodayColor: PropTypes.string,
  dayMarkedColor: PropTypes.string,
};

Month.defaultProps = {
  marked: null,
  dayColor: '#dddddd',
  dayTodayColor: '#222222',
  dayMarkedColor: '#268EC6',
};

export default Month;
