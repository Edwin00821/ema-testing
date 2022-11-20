import React, { Fragment } from 'react';
import type { Dispatch, SetStateAction, ChangeEventHandler } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import type { FieldError } from 'react-hook-form';

import { selectData } from 'typings';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  options: selectData[];
  errors: FieldError | undefined | null;
  name: string;
  placeholder: string;
  icon?: JSX.Element;
  selected: selectData;
  setSelected: Dispatch<SetStateAction<selectData>>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({
  options,
  name,
  placeholder,
  icon,
  errors,
  selected,
  setSelected,
  onChange,
}: Props) => {
  return (
    <Listbox
      as='div'
      value={selected}
      onChange={(e: any) => {
        onChange(e.value);
        setSelected(e);
      }}
      name={name}
      className='relative w-full'
    >
      {({ open }) => (
        <>
          <Listbox.Label
            className={`absolute top-[0.6rem] left-4 z-10 ${
              !errors
                ? 'text-gray-400 peer-focus:text-sky-500'
                : 'text-red-400 peer-focus:text-red-500'
            } origin-[0] -translate-y-[1.5rem] scale-75 transform bg-primary-light px-2 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:z-0 peer-focus:-translate-y-[1.5rem] peer-focus:scale-75 peer-focus:bg-black peer-focus:px-2 peer-focus:font-medium dark:bg-tertiary`}
          >
            {!selected.value ? '' : placeholder}
          </Listbox.Label>
          <Listbox.Button
            className={`relative h-[2.75rem] w-full cursor-default rounded-md border-2 py-2 pl-4 pr-10  ${
              !errors
                ? 'border-gray-300 focus:border-sky-500'
                : 'border-red-500 focus:border-red-500'
            } shadow-sm   `}
          >
            <span className='flex h-full w-full items-center'>
              <span
                className={` block truncate 
                    ${
                      !selected?.value
                        ? 'text-gray-400'
                        : 'text-gray-900 dark:text-gray-100'
                    } `}
              >
                {selected?.name}
              </span>
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <ChevronDownIcon
                className={`h-5 w-5 ${
                  !selected?.value ? 'text-gray-900' : 'text-gray-900'
                } `}
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          {icon}
          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-primary-light py-1 text-base shadow-lg ring-black  ring-opacity-5 focus:outline-none dark:bg-tertiary sm:text-sm'>
              {options?.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    classNames(
                      active
                        ? 'bg-secondary text-white dark:text-gray-700'
                        : 'text-gray-900 dark:text-gray-100',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <div className='flex items-center'>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'ml-3 block truncate'
                          )}
                        >
                          {option.name}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-secondary',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
          <p className='m-1 h-5 text-xs italic text-red-500 first-letter:uppercase'>
            {errors?.message}
          </p>
        </>
      )}
    </Listbox>
  );
};

export default Select;
