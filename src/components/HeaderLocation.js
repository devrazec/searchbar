'use client';

import React, { useContext, useState, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Dropdown, theme } from 'flowbite-react';
import { MapPin, MapPinAlt } from 'flowbite-react-icons/outline';
import { twMerge } from 'tailwind-merge';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
});

const HeaderLocation = () => {
  const {
    location,
    setLocation,
    selectedLocation,
    setSelectedLocation,
    product,
    setProduct,
    filteredProduct,
    setFilteredProduct,
    totalFilteredProduct,
    setTotalFilteredProduct,
  } = useContext(GlobalContext);

  const countProductsByLocation = (products = []) => {
    return products.reduce((acc, p) => {
      acc[p.locationId] = (acc[p.locationId] || 0) + 1;
      return acc;
    }, {});
  };

  const locationCounts = useMemo(
    () => countProductsByLocation(filteredProduct || []),
    [filteredProduct]
  );

  const toggleLocation = value => {
    setSelectedLocation(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <MapPinAlt className="h-5 w-5" />
        </span>
      }
      theme={{
        content: twMerge(
          theme.dropdown.content,
          'my-1 w-[calc(100vw-1rem)] max-w-5xl rounded-lg'
        ),
        floating: {
          base: twMerge(
            theme.dropdown.floating.base,
            'z-10 w-[calc(100vw-1rem)] max-w-5xl divide-y rounded-lg'
          ),
        },
        inlineWrapper: twMerge(
          theme.dropdown.inlineWrapper,
          'hover:underline dark:text-white'
        ),
      }}
    >
      <div className="mx-auto flex w-full flex-col md:flex-row items-center md:items-stretch gap-4 p-4 dark:border-gray-600">
        <div className="md:w-10/12 w-full rounded-lg border border-gray-200 dark:border-gray-600">
          {/* MAP PLACEHOLDER */}
          <div className="h-64 md:h-full w-full rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <LeafletMap />
          </div>
        </div>

        <div className="md:w-2/12 w-full">
          <ul className="space-y-2 p-2 text-sm">
            {location.map(loc => (
              <li key={loc.value} className="flex items-center justify-between">
                <div className="flex min-w-0 flex-1 items-center">
                  <Checkbox
                    id={`location-${loc.value}`}
                    checked={selectedLocation.includes(loc.value)}
                    //disabled={!locationCounts[loc.value]}
                    onChange={() => toggleLocation(loc.value)}
                  />

                  <div
                    className={twMerge(
                      'ml-2 h-3 w-3 flex-shrink-0 rounded-full border',
                      loc.tailwind
                    )}
                  />

                  <label
                    htmlFor={`location-${loc.value}`}
                    className="ml-1.5 truncate text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    {loc.label}
                  </label>
                </div>

                <div className="ml-2 w-8 text-right text-gray-400">
                  {locationCounts[loc.value] ?? 0}
                </div>
              </li>
            ))}

            {/* TOTAL */}
            <li className="mt-2 flex items-center justify-between border-t pt-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                Total Products
              </span>
              <span className="w-8 text-right font-semibold text-gray-700 dark:text-gray-300">
                {filteredProduct.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};

export default React.memo(HeaderLocation);
