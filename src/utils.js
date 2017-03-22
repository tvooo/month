import startOfMonth from 'date-fns/start_of_month';
import isSameMonth from 'date-fns/is_same_month';
import addDays from 'date-fns/add_days';

const getDaysInMonth = (month) => {
  const firstOfMonth = startOfMonth(month);
  const daysInMonth = [];
  let currentDay = new Date(firstOfMonth);

  console.log(currentDay, firstOfMonth);

  while (isSameMonth(firstOfMonth, currentDay)) {
    daysInMonth.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return daysInMonth;
};

export default getDaysInMonth;
