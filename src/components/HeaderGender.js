'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox } from 'flowbite-react';

const HeaderGender = () => {
  const { gender, selectedGender, setSelectedGender, filteredProduct } =
    useContext(GlobalContext);

  const genderCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.genderId] = (acc[p.genderId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  const toggleGender = value => {
    setSelectedGender(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
        Gender
      </h6>

      <ul
        className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900
                     dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        {gender.map(gen => (
          <li
            key={gen.value}
            className="w-full border-r last:border-r-0 border-gray-200 dark:border-gray-600"
          >
            <label className="flex items-center pl-3 py-3 cursor-pointer w-full">
              <Checkbox
                id={`gender-${gen.value}`}
                checked={selectedGender.includes(gen.value)}
                onChange={() => toggleGender(gen.value)}
              />

              <span
                className={`ml-2 mr-2 h-3.5 w-3.5 rounded-full border ${gen.tailwind}`}
              />

              <span>{gen.label}</span>

              <span className="ml-auto mr-4 text-gray-400 text-sm">
                {genderCounts[gen.value] ?? 0}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(HeaderGender);
