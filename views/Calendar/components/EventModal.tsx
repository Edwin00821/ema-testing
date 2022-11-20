import { useContext, useState } from 'react';
import { CalendarContext } from '../context';

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(CalendarContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'push', payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className='fixed left-0 top-0 flex h-screen w-full items-center justify-center'>
      <form className='w-1/4 rounded-lg bg-white shadow-2xl'>
        <header className='flex items-center justify-between bg-gray-100 px-4 py-2'>
          <span className='material-icons-outlined text-gray-400'>
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: 'delete',
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className='material-icons-outlined cursor-pointer text-gray-400'
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className='material-icons-outlined text-gray-400'>
                close
              </span>
            </button>
          </div>
        </header>
        <div className='p-3'>
          <div className='grid-cols-1/5 grid items-end gap-y-7'>
            <div></div>
            <input
              type='text'
              name='title'
              placeholder='Add title'
              value={title}
              required
              className='w-full border-0 border-b-2 border-gray-200 pt-3 pb-2 text-xl font-semibold text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0'
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className='material-icons-outlined text-gray-400'>
              schedule
            </span>
            <p>{daySelected.format('dddd, MMMM DD')}</p>
            <span className='material-icons-outlined text-gray-400'>
              segment
            </span>
            <input
              type='text'
              name='description'
              placeholder='Add a description'
              value={description}
              required
              className='w-full border-0 border-b-2 border-gray-200 pt-3 pb-2 text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0'
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className='material-icons-outlined text-gray-400'>
              bookmark_border
            </span>
            <div className='flex gap-x-2'>
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
                >
                  {selectedLabel === lblClass && (
                    <span className='material-icons-outlined text-sm text-white'>
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className='mt-5 flex justify-end border-t p-3'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600'
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
