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
      <h6 className="mb-2.5 text-sm font-medium text-black dark:text-white">
        Date
      </h6>

      <ul
        className="w-full rounded-lg border border-gray-200 bg-white text-sm
             dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <li className="flex items-center px-3 py-3 gap-4 w-full">
          {/* Start Date */}
          <div className="w-36">
            <Datepicker
              key={`start-${dateResetKey}`}
              onChange={date => setDateStart(date ?? null)}
              language="en-GB"
              placeholder="Start date"
              value={dateStart}
              showClearButton={false}
            />
          </div>

          {/* End Date */}
          <div className="w-36">
            <Datepicker
              key={`end-${dateResetKey}`}
              onChange={date => setDateEnd(date ?? null)}
              language="en-GB"
              placeholder="End date"
              value={dateEnd}
              minDate={dateStart}
              showClearButton={false}
            />
          </div>

          {/* Count */}
          <div className="ml-auto text-gray-400 text-sm">{dateTotal}</div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(HeaderDate);
