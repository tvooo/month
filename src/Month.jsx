import React from 'react';
import PropTypes from 'prop-types';
import isToday from 'date-fns/is_today';

import Day from './Day';
import getDaysInMonth from './utils';
import { getMonthWidth, getMonthHeight } from './sizes';

const Month = ({
  month,
  marked,
  dayColor,
  dayTodayColor,
  dayMarkedColor,
  weekStartsOn,
  ...rest
}) => {
  const daysInMonth = getDaysInMonth(month);

  const viewBox = [
    0,
    0,
    getMonthWidth(),
    getMonthHeight(month, weekStartsOn),
  ];

  return (
    <svg
      className="month"
      viewBox={viewBox.join(' ')}
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      {
        daysInMonth.map(date => (
          <Day
            key={date.toString()}
            date={date}
            today={isToday(date)}
            marked={marked ? marked(date) : false}
            dayColor={dayColor}
            dayTodayColor={dayTodayColor}
            dayMarkedColor={dayMarkedColor}
            weekStartsOn={weekStartsOn}
          />
        ))
      }
    </svg>
  );
};

Month.propTypes = {
  month: PropTypes.instanceOf(Date).isRequired,
  marked: PropTypes.func,
  dayColor: PropTypes.string,
  dayTodayColor: PropTypes.string,
  dayMarkedColor: PropTypes.string,
  weekStartsOn: PropTypes.number,
};

Month.defaultProps = {
  marked: null,
  dayColor: '#dddddd',
  dayTodayColor: '#222222',
  dayMarkedColor: '#268EC6',
  weekStartsOn: 0,
};

export default Month;
