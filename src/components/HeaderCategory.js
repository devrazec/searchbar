'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';

const HeaderCategory = () => {
  const { category, selectedCategory, setSelectedCategory, filteredProduct } =
    useContext(GlobalContext);

  const categoryCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.categoryId] = (acc[p.categoryId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  const toggleCategory = value => {
    setSelectedCategory(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const resetCategory = () => setSelectedCategory([]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h6 className="text-sm font-medium text-black dark:text-white">
          Category
        </h6>

        <button
          type="button"
          onClick={resetCategory}
          title="Clear category filter"
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
          {category.map(cat => (
            <li key={cat.value} className="flex items-center justify-between">
              <div className="flex items-center ml-2">
                <Checkbox
                  id={`category-${cat.value}`}
                  checked={selectedCategory.includes(cat.value)}
                  onChange={() => toggleCategory(cat.value)}
                />
                <Label
                  htmlFor={`category-${cat.value}`}
                  className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {cat.label}
                </Label>
              </div>

              <span className="ml-2 w-6 text-right text-gray-400 text-sm mr-6">
                {categoryCounts[cat.value] ?? 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(HeaderCategory);
