import * as Constants from '../../model/Constants';

import '../../style/calendar-header.css';

export default function CalendarHeader({day, month, year, setDate}) {
  return (
    <div className='calendar-header'>
        <p>
          {Constants.months[month]} {year}
        </p>
        <div  className='calendar-header__arrows'>
          <div
            className='calendar-header__arrow-icon'
            onClick={() => setDate(new Date(year, month - 1, day))}
          >
            {'<'}
          </div>
          <div
            className='calendar-header__arrow-icon'
            onClick={() => setDate(new Date(year, month + 1, day))}
          >
            {'>'}
          </div>
        </div>
      </div>
  )
}
