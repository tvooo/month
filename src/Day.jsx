import React, { PropTypes } from 'react';
import startOfMonth from 'date-fns/start_of_month';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import sizes, { getDayCX, getDayCY } from './sizes';

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
    strokeWidth: today ? sizes.dayStrokeWidth : 0,
    stroke: dayTodayColor,
  };

  const cx = getDayCX(date.getDay());
  const cy = getDayCY(differenceInCalendarWeeks(date, startOfMonth(date), 0));

  return (
    <g>
      <circle {...props} r={sizes.dayRadius} cx={cx} cy={cy} style={sx} />
    </g>
  );
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayColor: PropTypes.string.isRequired,
  dayTodayColor: PropTypes.string.isRequired,
  dayMarkedColor: PropTypes.string.isRequired,
  marked: PropTypes.bool,
  today: PropTypes.bool,
};

Day.defaultProps = {
  marked: false,
  today: false,
};

export default Day;
