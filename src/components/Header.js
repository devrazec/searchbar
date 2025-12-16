'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button, Dropdown, DropdownItem } from 'flowbite-react';

const Header = () => {
  const {
    darkMode,
    setDarkMode,
    dataProduct,
    setDataProduct,
    category,
    setCategory,
    location,
    setLocation,
    gender,
    setGender,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedGender,
    setSelectedGender,
  } = useContext(GlobalContext);

  return (
    <div>
      <div className="p-6">
        <Button>Click Me</Button>

        <Dropdown label="Menu" inline={true}>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
};

export default React.memo(Header);
