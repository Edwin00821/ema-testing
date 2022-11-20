import dayjs from 'dayjs';
import { useContext, useEffect, useState, Fragment } from 'react';
import { CalendarContext } from '../context';
import { getMonth } from 'libs/getMonths';

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }
  return (
    <div className='mt-9'>
      <header className='flex justify-between'>
        <p className='font-bold text-gray-500'>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className='material-icons-outlined mx-2 cursor-pointer text-gray-600'>
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className='material-icons-outlined mx-2 cursor-pointer text-gray-600'>
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className='grid grid-cols-7 grid-rows-6'>
        {currentMonth[0].map((day, i) => (
          <span key={i} className='py-1 text-center text-sm'>
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`w-full py-1 ${getDayClass(day)}`}
              >
                <span className='text-sm'>{day.format('D')}</span>
              </button>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
