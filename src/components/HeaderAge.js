'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, TextInput, RangeSlider } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';
import { Slider } from 'primereact/slider';

const HeaderAge = () => {
  const { age, selectedAge, setSelectedAge, filteredProduct } =
    useContext(GlobalContext);

  const ageCounts = useMemo(() => {
    return (filteredProduct || []).reduce((total, p) => {
      return p.age >= selectedAge[0] && p.age <= selectedAge[1]
        ? total + 1
        : total;
    }, 0);
  }, [filteredProduct, selectedAge]);

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Age in years
      </h6>

      <ul
        className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900
             dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <li className="w-full">
          <div className="flex items-center w-full px-3 py-3">
            {/* Min span */}
            <span className="w-16 text-sm text-body text-left">
              Min {selectedAge[0]}
            </span>

            {/* Slider */}
            <div className="flex-1 px-2">
              <Slider
                value={selectedAge}
                onChange={e => {
                  const [min, max] = e.value;
                  setSelectedAge([Math.min(min, max), Math.max(min, max)]);
                }}
                range
                min={1}
                max={12}
                step={1}
                className="w-full"
              />
            </div>

            {/* Max span */}
            <span className="w-20 text-sm text-body text-right">
              Max {selectedAge[1]}
            </span>

            {/* Age count */}
            <span className="ml-4 text-gray-400 text-sm">{ageCounts ?? 0}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(HeaderAge);
