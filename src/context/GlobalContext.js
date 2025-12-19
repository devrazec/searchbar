'use client';

import { createContext, useState, useEffect } from 'react';
import { useThemeMode } from 'flowbite-react';

import dataProductJson from '../data/product.json';
import dataCategoryJson from '../data/category.json';
import dataLocationJson from '../data/location.json';
import dataGenderJson from '../data/gender.json';
import dataColorJson from '../data/color.json';
import dataSellerJson from '../data/seller-sorted.json';
import dataBrandJson from '../data/brand-sorted.json';
import dataSellerGroupedJson from '../data/seller-grouped.json';
import dataBrandGroupedJson from '../data/brand-grouped.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const { mode, setMode } = useThemeMode();
  const [themeMode, setThemeMode] = useState(() => mode || 'dark');

  const [dataProduct, setDataProduct] = useState(dataProductJson);
  const [category, setCategory] = useState(dataCategoryJson);
  const [location, setLocation] = useState(dataLocationJson);
  const [gender, setGender] = useState(dataGenderJson);
  const [color, setColor] = useState(dataColorJson);
  const [seller, setSeller] = useState(dataSellerJson);
  const [brand, setBrand] = useState(dataBrandJson);
  const [sellerGrouped, setSellerGrouped] = useState(dataSellerGroupedJson);
  const [brandGrouped, setBrandGrouped] = useState(dataBrandGroupedJson);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  //useEffect(() => {
  //setThemeMode(mode);
  //}, [mode]);

  return (
    <GlobalContext.Provider
      value={{
        themeMode,
        setThemeMode,
        dataProduct,
        setDataProduct,
        category,
        setCategory,
        location,
        setLocation,
        gender,
        setGender,
        color, setColor,
        seller, setSeller,
        brand, setBrand,
        sellerGrouped, setSellerGrouped,
        brandGrouped, setBrandGrouped,

        selectedCategory,
        setSelectedCategory,
        selectedLocation,
        setSelectedLocation,
        selectedGender,
        setSelectedGender,
        selectedColor, setSelectedColor,
        selectedSeller, setSelectedSeller,
        selectedBrand, setSelectedBrand,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
