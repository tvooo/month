import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import isSameMonth from 'date-fns/is_same_month';
import addDays from 'date-fns/add_days';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';

const getDaysInMonth = (month) => {
  const firstOfMonth = startOfMonth(month);
  const daysInMonth = [];
  let currentDay = new Date(firstOfMonth);

  while (isSameMonth(firstOfMonth, currentDay)) {
    daysInMonth.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return daysInMonth;
};

export const getNumberOfWeeks = (month) => {
  const firstOfMonth = startOfMonth(month);
  const lastOfMonth = endOfMonth(month);

  return differenceInCalendarWeeks(lastOfMonth, firstOfMonth, 0) + 1;
};

export default getDaysInMonth;
