import react from 'react';

function App() {
  return (
    <div className='flex h-screen text-gray-800 antialiased'>
      <div className='flex h-full w-full flex-row overflow-x-hidden'>
        <div className='flex w-64 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2'>
          <div className='flex h-12 w-full flex-row items-center justify-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                ></path>
              </svg>
            </div>
            <div className='ml-2 text-2xl font-bold'>QuickChat</div>
          </div>
          <div className='mt-4 flex w-full flex-col items-center rounded-lg border border-gray-200 bg-indigo-100 py-6 px-4'>
            <div className='h-20 w-20 overflow-hidden rounded-full border'>
              <img
                src='https://avatars3.githubusercontent.com/u/2763884?s=128'
                alt='Avatar'
                className='h-full w-full'
              />
            </div>
            <div className='mt-2 text-sm font-semibold'>Aminos Co.</div>
            <div className='text-xs text-gray-500'>Lead UI/UX Designer</div>
            <div className='mt-3 flex flex-row items-center'>
              <div className='flex h-4 w-8 flex-col justify-center rounded-full bg-indigo-500'>
                <div className='mr-1 h-3 w-3 self-end rounded-full bg-white'></div>
              </div>
              <div className='ml-1 text-xs leading-none'>Active</div>
            </div>
          </div>
          <div className='mt-8 flex flex-col'>
            <div className='flex flex-row items-center justify-between text-xs'>
              <span className='font-bold'>Active Conversations</span>
              <span className='flex h-4 w-4 items-center justify-center rounded-full bg-gray-300'>
                4
              </span>
            </div>
            <div className='-mx-2 mt-4 flex h-48 flex-col space-y-1 overflow-y-auto'>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200'>
                  H
                </div>
                <div className='ml-2 text-sm font-semibold'>Henry Boyd</div>
              </button>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-200'>
                  M
                </div>
                <div className='ml-2 text-sm font-semibold'>Marta Curtis</div>
                <div className='ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white'>
                  2
                </div>
              </button>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-orange-200'>
                  P
                </div>
                <div className='ml-2 text-sm font-semibold'>Philip Tucker</div>
              </button>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-pink-200'>
                  C
                </div>
                <div className='ml-2 text-sm font-semibold'>Christine Reid</div>
              </button>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-200'>
                  J
                </div>
                <div className='ml-2 text-sm font-semibold'>Jerry Guzman</div>
              </button>
            </div>
            <div className='mt-6 flex flex-row items-center justify-between text-xs'>
              <span className='font-bold'>Archivied</span>
              <span className='flex h-4 w-4 items-center justify-center rounded-full bg-gray-300'>
                7
              </span>
            </div>
            <div className='-mx-2 mt-4 flex flex-col space-y-1'>
              <button className='flex flex-row items-center rounded-xl p-2 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200'>
                  H
                </div>
                <div className='ml-2 text-sm font-semibold'>Henry Boyd</div>
              </button>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-auto flex-col p-6'>
          <div className='flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4'>
            <div className='mb-4 flex h-full flex-col overflow-x-auto'>
              <div className='flex h-full flex-col'>
                <div className='grid grid-cols-12 gap-y-2'>
                  <div className='col-start-1 col-end-8 rounded-lg p-3'>
                    <div className='flex flex-row items-center'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow'>
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-1 col-end-8 rounded-lg p-3'>
                    <div className='flex flex-row items-center'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow'>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          asperiores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-6 col-end-13 rounded-lg p-3'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative mr-3 rounded-xl bg-indigo-100 py-2 px-4 text-sm shadow'>
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-6 col-end-13 rounded-lg p-3'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative mr-3 rounded-xl bg-indigo-100 py-2 px-4 text-sm shadow'>
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-1 col-end-8 rounded-lg p-3'>
                    <div className='flex flex-row items-center'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow'>
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-6 col-end-13 rounded-lg p-3'>
                    <div className='flex flex-row-reverse items-center justify-start'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative mr-3 rounded-xl bg-indigo-100 py-2 px-4 text-sm shadow'>
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div className='absolute bottom-0 right-0 -mb-5 mr-2 text-xs text-gray-500'>
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-1 col-end-8 rounded-lg p-3'>
                    <div className='flex flex-row items-center'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow'>
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-start-1 col-end-8 rounded-lg p-3'>
                    <div className='flex flex-row items-center'>
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500'>
                        A
                      </div>
                      <div className='relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow'>
                        <div className='flex flex-row items-center'>
                          <button className='flex h-8 w-10 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-800'>
                            <svg
                              className='h-6 w-6 text-white'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                              ></path>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              ></path>
                            </svg>
                          </button>
                          <div className='ml-4 flex flex-row items-center space-x-px'>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-4 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-10 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-10 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-12 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-10 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-6 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-5 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-4 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-3 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-10 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-10 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-1 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-1 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-8 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-2 w-1 rounded-lg bg-gray-500'></div>
                            <div className='h-4 w-1 rounded-lg bg-gray-500'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-16 w-full flex-row items-center rounded-xl bg-white px-4'>
              <div>
                <button className='flex items-center justify-center text-gray-400 hover:text-gray-600'>
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='ml-4 flex-grow'>
                <div className='relative w-full'>
                  <input
                    type='text'
                    className='flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none'
                  />
                  <button className='absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='ml-4'>
                <button className='flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600'>
                  <span>Send</span>
                  <span className='ml-2'>
                    <svg
                      className='-mt-px h-4 w-4 rotate-45 transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
