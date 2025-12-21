'use client';

import React, { useContext, useMemo, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Datepicker } from 'flowbite-react';

const HeaderDate = () => {
  const { dateRange, setDateRange, dateStart, setDateStart,
    dateEnd, setDateEnd, filteredProduct } =
    useContext(GlobalContext);

  const dateTotal = useMemo(() => {
    return filteredProduct?.length ?? 0;
  }, [filteredProduct]);

  return (
    <div

    >
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Date
      </h6>

      <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm
                     dark:border-gray-600 dark:bg-gray-800 dark:text-white">

        <li className="w-36">
          <div className="pl-3 py-3">
            <Datepicker
            defaultDate={dateStart}
              onChange={(date) =>
                setDateStart(date)
              }
              //dateFormat='dd/mm/yyyy'
              inputDateFormatProp={{
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }}
              placeholder="Start date"
              value={dateStart}
            />
          </div>
        </li>

        <li className="w-36">
          <div className="pl-3 py-3">

            <Datepicker
            defaultDate={dateEnd}
              onChange={(date) =>
                setDateEnd(date)
              }
              dateFormat="dd/mm/yyyy"
              inputDateFormatProp={{
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }}
              placeholder="End date"
              value={dateEnd}
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
