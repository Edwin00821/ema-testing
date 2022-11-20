import React, { useContext } from 'react';
import { CalendarContext } from '../context';

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(CalendarContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className='flex items-center rounded-full border p-2 shadow-md hover:shadow-2xl'
    >
      <img src='/img/logo3.png' alt='create_event' className='h-7 w-7' />
      <span className='pl-3 pr-7'> Create</span>
    </button>
  );
};

export default CreateEventButton;
