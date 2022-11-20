import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import { CalendarContext } from '../context';

const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(CalendarContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }
  return (
    <div className='flex flex-col border border-gray-200'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='mt-1 text-sm'>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`my-1 p-1 text-center text-sm  ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className='flex-1 cursor-pointer'
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 mr-3 mb-1 truncate rounded p-1 text-sm text-gray-600`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
