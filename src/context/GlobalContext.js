'use client';

import { createContext, useState } from 'react';

import dataProductJson from '../data/data-product.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [dataProduct, setDataProduct] = useState(dataProductJson);

  const [category, setCategory] = useState([
    { label: 'Tops', value: 'Tops' },
    { label: 'Capris', value: 'Capris' },
    { label: 'Dresses', value: 'Dresses' },
    { label: 'Shorts', value: 'Shorts' },
    { label: 'Tshirts', value: 'Tshirts' },
    { label: 'Skirts', value: 'Skirts' },
    { label: 'Jeans', value: 'Jeans' },
    { label: 'Leggings', value: 'Leggings' },
    { label: 'Innerwear Vests', value: 'Innerwear Vests' },
    { label: 'Rompers', value: 'Rompers' },
    { label: 'Lehenga Choli', value: 'Lehenga Choli' },
    { label: 'Salwar', value: 'Salwar' },
    { label: 'Booties', value: 'Booties' },
    { label: 'Clothing Set', value: 'Clothing Set' },
    { label: 'Trousers', value: 'Trousers' },
    { label: 'Shirts', value: 'Shirts' },
    { label: 'Jackets', value: 'Jackets' },
    { label: 'Kurtas', value: 'Kurtas' },
    { label: 'Sweatshirts', value: 'Sweatshirts' },
    { label: 'Kurta Sets', value: 'Kurta Sets' },
    { label: 'Churidar', value: 'Churidar' },
    { label: 'Waistcoat', value: 'Waistcoat' },
    { label: 'Blazers', value: 'Blazers' },
  ]);
  const [location, setLocation] = useState([
    { label: 'Lisbon', value: 'Lisbon' },
    { label: 'Porto', value: 'Porto' },
    { label: 'Faro', value: 'Faro' },
    { label: 'Coimbra', value: 'Coimbra' },
    { label: 'Braga', value: 'Braga' },
    { label: 'Bragança', value: 'Bragança' },
    { label: 'Leiria', value: 'Leiria' },
    { label: 'Guarda', value: 'Guarda' },
    { label: 'Beja', value: 'Beja' },
    { label: 'Viana', value: 'Viana' },
    { label: 'VilaReal', value: 'VilaReal' },
    { label: 'Setubal', value: 'Setubal' },
  ]);
  const [gender, setGender] = useState([
    { label: 'Boys', value: 'Boys' },
    { label: 'Girls', value: 'Girls' },
  ]);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
