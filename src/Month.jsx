import React from 'react';
import Day from './Day';
import getDaysInMonth from './utils';
import isToday from 'date-fns/is_today';

const Month = ({
  month,
  color,
  marked,
  ...props
}) => {
  const daysInMonth = getDaysInMonth(month);

  const did = (date) => {
    return (event) => date === event.date;
  }

  console.log(daysInMonth);

  const viewBox = [
    0,
    0,
    25 * 9,
    25 * 6
  ].join(' ')

  return (
    <div>
      <svg className='month' viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        {
          daysInMonth.map((day) => <Day date={day} key={day} color={color} today={isToday(day)} marked={marked(day)} />)
        }
      </svg>
    </div>
  )
}

export default Month;
