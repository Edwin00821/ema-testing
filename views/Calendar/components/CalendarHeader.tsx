import dayjs from 'dayjs';
import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { CalendarContext } from '../context';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <>
      <header className='flex items-center px-4 py-2'>
        <img src={'/img/logo3.png'} alt='calendar' className='mr-2 h-12 w-12' />
        <h1 className='fond-bold mr-10 text-xl text-gray-500'>Calendar</h1>
        <button onClick={handleReset} className='mr-5 rounded border py-2 px-4'>
          Today
        </button>
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
        <h2 className='ml-4 text-xl font-bold text-gray-500'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </h2>
      </header>
    </>
  );
};

export default CalendarHeader;
