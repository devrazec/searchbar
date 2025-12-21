'use client';

import React, { useContext, useMemo, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Datepicker } from 'flowbite-react';

const HeaderDate = () => {
  const {
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    filteredProduct,
    dateResetKey,
  } = useContext(GlobalContext);

  const dateTotal = useMemo(() => {
    return filteredProduct?.length ?? 0;
  }, [filteredProduct]);

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Date
      </h6>

      <ul
        className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm
                     dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <li className="w-36">
          <div className="pl-3 py-3">
            <Datepicker
            key={`start-${dateResetKey}`}
              onChange={date => setDateStart(date ?? null)}
              language="en-GB"
              placeholder="Start date"
              value={dateStart}
              showClearButton={false}
            />
          </div>
        </li>

        <li className="w-36">
          <div className="pl-3 py-3">
            <Datepicker
            key={`start-${dateResetKey}`}
              language="en-GB"
              onChange={date => setDateEnd(date ?? null)}
              placeholder="End date"
              value={dateEnd}
              minDate={dateStart}
              showClearButton={false}
            />
          </div>
        </li>

        {/* COUNT */}
        <li className="flex items-center px-3 ml-4 text-gray-400 text-sm">
          {dateTotal}
        </li>
      </ul>
    </div>
  );
};

export default React.memo(HeaderDate);
