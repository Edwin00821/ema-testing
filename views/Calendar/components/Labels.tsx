import { useContext } from 'react';
import { CalendarContext } from '../context';

export default function Labels() {
  const { labels, updateLabel } = useContext(CalendarContext);
  return (
    <>
      <p className='mt-10 font-bold text-gray-500'>Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className='mt-3 block items-center'>
          <input
            type='checkbox'
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 cursor-pointer rounded focus:ring-0`}
          />
          <span className='ml-2 capitalize text-gray-700'>{lbl}</span>
        </label>
      ))}
    </>
  );
}
