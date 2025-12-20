'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';

const HeaderLocation = () => {
  const { location, selectedLocation, setSelectedLocation, filteredProduct } =
    useContext(GlobalContext);

  const locationCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.locationId] = (acc[p.locationId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  const toggleLocation = value => {
    setSelectedLocation(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const resetLocation = () => setSelectedLocation([]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h6 className="text-sm font-medium text-black dark:text-white">
          Location
        </h6>

        <button
          type="button"
          onClick={resetLocation}
          disabled={selectedLocation.length === 0}
          title="Clear location filter"
          className="
            inline-flex items-center justify-center
            rounded p-1
            text-gray-400 hover:text-gray-700
            dark:text-gray-500 dark:hover:text-gray-200
            disabled:opacity-40 disabled:cursor-not-allowed mr-8
          "
        >
          <HiOutlineX className="h-4 w-4" />
        </button>
      </div>

      {/* Scroll container */}
      <div className="max-h-56 overflow-y-auto">
        <ul className="space-y-2 mt-1">
          {location.map(loc => (
            <li key={loc.value} className="flex items-center justify-between">
              <div className="flex items-center ml-2">
                <Checkbox
                  id={`location-${loc.value}`}
                  checked={selectedLocation.includes(loc.value)}
                  onChange={() => toggleLocation(loc.value)}
                />

                <Label
                  htmlFor={`location-${loc.value}`}
                  className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <span
                    className={`mr-2 h-3.5 w-3.5 rounded-full border ${loc.tailwind}`}
                  />
                  {loc.label}
                </Label>
              </div>

              <span className="ml-2 w-6 text-right text-gray-400 text-sm mr-6">
                {locationCounts[loc.value] ?? 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(HeaderLocation);
