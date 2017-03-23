import React from 'react';
import moment from 'moment';

const Day = ({
  date,
  dayColor,
  dayTodayColor,
  dayMarkedColor,
  marked,
  today,
  ...props
}) => {
  const sx = {
    fill: marked ? dayMarkedColor : dayColor,
    strokeWidth: today ? 3 : 0,
    stroke: dayTodayColor,
  };

  const dt = moment(date)
  const weekDay = dt.isoWeekday();
  const day = dt.date();
  const firstDayOfMonth = dt.startOf('month').isoWeekday();

  const x = 40 + 25 * weekDay;
  const y = 40 + 25 * (Math.floor((-weekDay + firstDayOfMonth + day) / 7));

  return (
    <g>
      <circle {...props} r="10" cx={x} cy={y} style={sx} />
      <text x={x} y={y}></text>
    </g>
  )
}

export default Day;
