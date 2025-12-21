'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, TextInput, RangeSlider } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';
import { Slider } from 'primereact/slider';

const HeaderDelivery = () => {
  const { delivery, selectedDelivery, setSelectedDelivery, filteredProduct } =
    useContext(GlobalContext);

  const deliveryCounts = useMemo(() => {
    return (filteredProduct || []).reduce((total, p) => {
      return p.delivery >= selectedDelivery[0] &&
        p.delivery <= selectedDelivery[1]
        ? total + 1
        : total;
    }, 0);
  }, [filteredProduct, selectedDelivery]);

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Delivery Time in Days
      </h6>

      <ul
        className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900
                         dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <li className="w-full border-r last:border-r-0 border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3 py-3 cursor-pointer w-full">
            <span className="text-sm text-body start-0 -bottom-6 mr-4 w-22">
              Min {selectedDelivery[0]}{' '}
            </span>

            <Slider
              value={selectedDelivery}
              onChange={e => {
                const [min, max] = e.value;
                setSelectedDelivery([Math.min(min, max), Math.max(min, max)]);
              }}
              range
              min={1}
              max={30}
              step={1}
              className="w-22"
            />

            <span className="text-sm text-body start-0 -bottom-6 ml-4 w-22">
              Max {selectedDelivery[1]}{' '}
            </span>

            <span className="ml-auto mr-4 text-gray-400 text-sm">
              {deliveryCounts ?? 0}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(HeaderDelivery);
