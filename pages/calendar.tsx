import type { NextPage } from 'next';
import { LayoutStudent } from 'components/Layouts';
import CalendarPage from 'views/Calendar';
import { CalendarProvider } from 'views/Calendar/context';

import React from 'react';

const Calendar: NextPage = () => {
  return (
      <CalendarProvider>
        <CalendarPage />
      </CalendarProvider>
  );
};

export default Calendar;
