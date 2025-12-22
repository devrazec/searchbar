'use client';

import React, { useContext, useMemo, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, TextInput } from 'flowbite-react';

const HeaderBrand = () => {
  const { selectedBrand, setSelectedBrand, brandGrouped, filteredProduct } =
    useContext(GlobalContext);

  const [letterPage, setLetterPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyWithProducts, setOnlyWithProducts] = useState(false);

  const lettersPerColumn = 3;
  const columns = 3;
  const lettersPerPage = lettersPerColumn * columns;

  const toggleBrand = value => {
    setSelectedBrand(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  // Count products per brand
  const brandCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.brandId] = (acc[p.brandId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  // Filter brands per letter based on search and checkbox
  const filteredGroupedBrands = useMemo(() => {
    const filtered = {};
    Object.entries(brandGrouped).forEach(([letter, brands]) => {
      let filteredBrands = brands;

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredBrands = filteredBrands.filter(brand =>
          brand.label.toLowerCase().includes(term)
        );
      }

      if (onlyWithProducts) {
        filteredBrands = filteredBrands.filter(
          brand => (brandCounts[brand.value] || 0) > 0
        );
      }

      if (filteredBrands.length > 0) {
        filtered[letter] = filteredBrands;
      }
    });
    return filtered;
  }, [brandGrouped, searchTerm, onlyWithProducts, brandCounts]);

  const sortedLetters = Object.keys(filteredGroupedBrands).sort();
  const totalLetterPages = Math.ceil(sortedLetters.length / lettersPerPage);

  // Reset page if out of bounds
  useEffect(() => {
    if (letterPage > totalLetterPages && totalLetterPages > 0) {
      setLetterPage(totalLetterPages);
    } else if (totalLetterPages === 0) {
      setLetterPage(1);
    }
  }, [letterPage, totalLetterPages]);

  const displayedLetters = sortedLetters.slice(
    (letterPage - 1) * lettersPerPage,
    letterPage * lettersPerPage
  );

  const columnsArray = Array.from({ length: columns }, (_, colIndex) =>
    displayedLetters.slice(
      colIndex * lettersPerColumn,
      (colIndex + 1) * lettersPerColumn
    )
  );

  return (
    <div>
      {/* Search and checkbox filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <div onClick={e => e.stopPropagation()} className="flex-1">
          <TextInput
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="onlyWithProducts"
            checked={onlyWithProducts}
            onChange={e => setOnlyWithProducts(e.target.checked)}
          />
          <Label htmlFor="onlyWithProducts">Only show Brands with products</Label>
        </div>
      </div>

      {/* 3-column scrollable grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columnsArray.map((colLetters, colIndex) => (
          <div
            key={colIndex}
            className="space-y-4 overflow-y-auto max-h-[390px] border p-2 rounded"
          >
            {colLetters.map(letter => (
              <div key={letter}>
                <h5 className="text-lg font-medium uppercase text-black dark:text-white mb-2 sticky top-0 bg-white dark:bg-gray-800">
                  {letter}
                </h5>
                {filteredGroupedBrands[letter].map(brand => {
                  const count = brandCounts[brand.value] || 0;
                  return (
                    <div key={brand.value} className="flex items-center">
                      <Checkbox
                        id={`brand-${brand.value}`}
                        checked={selectedBrand.includes(brand.value)}
                        onChange={() => toggleBrand(brand.value)}
                      />
                      <Label
                        htmlFor={`brand-${brand.value}`}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {brand.label} ({count})
                      </Label>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Custom big-button pagination */}
      {totalLetterPages > 1 && (
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {Array.from({ length: totalLetterPages }, (_, i) => {
            const page = i + 1;
            const isActive = page === letterPage;
            return (
              <button
                key={page}
                onClick={() => setLetterPage(page)}
                className={`px-5 py-3 rounded font-medium text-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(HeaderBrand);
