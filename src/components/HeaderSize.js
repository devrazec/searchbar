'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, TextInput, RangeSlider } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';
import { Slider } from 'primereact/slider';

const HeaderSize = () => {
  const { size, selectedSize, setSelectedSize, filteredProduct } =
    useContext(GlobalContext);

  const sizeCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.sizeId] = (acc[p.sizeId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  const toggleSize = value => {
    setSelectedSize(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Size
      </h6>

      <ul
        className="grid grid-cols-3 gap-x-3 gap-y-2 w-full rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900
             dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        {size.map(siz => (
          <li key={siz.value} className="flex items-center justify-between py-1.5 px-1">
            <div className="flex items-center ml-2">
              <Checkbox
                id={`size-${siz.value}`}
                checked={selectedSize.includes(siz.value)}
                onChange={() => toggleSize(siz.value)}
              />

              <Label
                htmlFor={`size-${siz.value}`}
                className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
              >

                {siz.label}
              </Label>
            </div>

            <span className="ml-2 w-6 text-right text-gray-400 text-sm mr-6">
              {sizeCounts[siz.value] ?? 0}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(HeaderSize);
