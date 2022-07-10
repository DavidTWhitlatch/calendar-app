import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import * as Constants from '../../model/Constants';
import { useDate } from '../../util/useDate';

import '../../style/calendar.css';

export default function Calendar() {
  const [day, month, year, setDate] = useDate();

  return (
    <div className='calendar'>
      <CalendarHeader day={day} month={month} year={year} setDate={setDate} />
      <div className='weekHeader'>
        {Constants.weekDays.map((day, index) => (
          <div key={`weekday-${index}`}>{day}</div>
        ))}
      </div>
      <CalendarGrid day={day} month={month} year={year} setDate={setDate} />
    </div>
  );
}
