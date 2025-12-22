'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, RangeSlider, TextInput } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';
import { Slider } from 'primereact/slider';

const HeaderPrice = () => {
  const { productPrice, selectedPrice, setSelectedPrice, filteredProduct } =
    useContext(GlobalContext);

  const priceCounts = useMemo(() => {
    return (filteredProduct || []).reduce((total, p) => {
      return p.price >= selectedPrice[0] && p.price <= selectedPrice[1]
        ? total + 1
        : total;
    }, 0);
  }, [filteredProduct, selectedPrice]);

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Price
      </h6>

      <ul
        className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900
                                dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <li className="w-full">
          <div className="flex items-center w-full px-3 py-3">
            <span className="w-22 text-sm text-body text-left">
              Min €{selectedPrice[0].toFixed(2)}{' '}
            </span>
            <div className="flex-1 px-2">
              <Slider
                value={selectedPrice}
                onChange={e => {
                  const [min, max] = e.value.map(v => Number(v.toFixed(2)));
                  setSelectedPrice([Math.min(min, max), Math.max(min, max)]);
                }}
                range
                min={1}
                max={100}
                step={0.01}
                className="w-full"
              />
            </div>
            <span className="w-25 text-sm text-body text-right">
              Max €{selectedPrice[1].toFixed(2)}{' '}
            </span>

            <span className="ml-4 text-gray-400 text-sm">
              {priceCounts ?? 0}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(HeaderPrice);
