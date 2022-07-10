import classNames from 'classnames';

import { calcMonthArr } from '../../util/calcMonthArr';
import * as Constants from '../../model/Constants';

export default function CalendarGrid({ day, month, year, setDate }) {
  const monthArr = calcMonthArr(month, year);

  const getTaskDays = () => {
    return Constants.taskDays
      .filter((t) => t.getMonth() === month)
      .map((t) => t.getDate());
  };

  const isTaskInDay = (day, month) => {
    const isDayMatch = getTaskDays().includes(day.date.getDate());
    const isMonthMatch = day.date.getMonth() === month;
    let result = false;

    if (isDayMatch && isMonthMatch) {
      result = true;
    }

    return result;
  };

  return (
    <div className='calendarGrid'>
      {monthArr.map((viewDay, index) => (
        <div
          className={classNames('date', {
            otherMonths: viewDay.active !== true,
            selectedDate:
              viewDay.date.getDate() === day && viewDay.active === true,
          })}
          onClick={() => setDate(viewDay.date)}
          key={index}
        >
          {viewDay.date.getDate()}
          {isTaskInDay(viewDay, month) === true && (
            <div
              className={classNames('taskIndicator', {
                selectedIndicator:
                  viewDay.date.getDate() === day && viewDay.active === true,
              })}
            />
          )}
        </div>
      ))}
    </div>
  );
}
