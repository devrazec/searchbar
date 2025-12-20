'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';

const HeaderDelivery = () => {
  const { color, selectedColor, setSelectedColor, filteredProduct } =
    useContext(GlobalContext);

  const colorCounts = useMemo(() => {
    return (filteredProduct || []).reduce((acc, p) => {
      acc[p.colorId] = (acc[p.colorId] || 0) + 1;
      return acc;
    }, {});
  }, [filteredProduct]);

  const toggleColor = value => {
    setSelectedColor(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const resetColor = () => setSelectedColor([]);

  return (
    <div>
      <Label
        htmlFor="min-delivery-time"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Max Delivery Time (Days)
      </Label>
      <RangeSlider
        defaultValue="30"
        id="min-delivery-time"
        name="min-delivery-time"
        max="50"
        min="3"
        step="1"
      />

      <TextInput
        defaultValue="30"
        id="min-delivery-time-input"
        name="min-delivery-time-input"
        max="50"
        min="3"
        required
        type="number"
      />
    </div>
  );
};

export default React.memo(HeaderDelivery);
