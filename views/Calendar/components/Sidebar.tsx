import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';
export default function Sidebar() {
  return (
    <aside className='w-64 border p-5'>
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
