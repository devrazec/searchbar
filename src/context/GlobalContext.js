'use client';

import { createContext, useState, useEffect } from 'react';
import { useThemeMode } from 'flowbite-react';

import dataProductJson from '../data/product.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const { mode, setMode } = useThemeMode();
  const [themeMode, setThemeMode] = useState(() => mode || 'dark');

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
    { label: 'Lisbon', value: 'Lisbon', color: '#f87171', tailwind: 'bg-red-400' },
    { label: 'Porto', value: 'Porto', color: '#fb923c', tailwind: 'bg-orange-400' },
    { label: 'Faro', value: 'Faro', color: '#fbbf24', tailwind: 'bg-amber-400' },
    { label: 'Coimbra', value: 'Coimbra', color: '#facc15', tailwind: 'bg-yellow-400' },
    { label: 'Braga', value: 'Braga', color: '#a3e635', tailwind: 'bg-lime-400' },
    { label: 'Bragança', value: 'Bragança', color: '#34d399', tailwind: 'bg-emerald-400' },
    { label: 'Leiria', value: 'Leiria', color: '#2dd4bf', tailwind: 'bg-teal-400' },
    { label: 'Guarda', value: 'Guarda', color: '#22d3ee', tailwind: 'bg-cyan-400' },
    { label: 'Beja', value: 'Beja', color: '#38bdf8', tailwind: 'bg-sky-400' },
    { label: 'Viana', value: 'Viana', color: '#60a5fa', tailwind: 'bg-blue-400' },
    { label: 'VilaReal', value: 'VilaReal', color: '#818cf8', tailwind: 'bg-indigo-400' },
    { label: 'Setubal', value: 'Setubal', color: '#c084fc', tailwind: 'bg-purple-400' },
  ]);

  const [gender, setGender] = useState([
    { label: 'Boys', value: 'Boys', color: '#60a5fa', tailwind: 'bg-blue-400' },
    { label: 'Girls', value: 'Girls', color: '#c084fc', tailwind: 'bg-purple-400' },
  ]);

  const [color, setColor] = useState([
    { label: 'White', value: 'White', color: '#FFFFFF', tailwinf: 'bg-white' },
    { label: 'Black', value: 'Black', color: '#000000', tailwinf: 'bg-black' },
    { label: 'Blue', value: 'Blue', color: '#007BFF', tailwinf: 'bg-blue-400' },
    { label: 'Pink', value: 'Pink', color: '#FF69B4', tailwinf: 'bg-pink-400' },
    { label: 'Red', value: 'Red', color: '#FF0000', tailwinf: 'bg-red-400' },
    { label: 'Olive', value: 'Olive', color: '#808000', tailwinf: 'bg-olive-400' }, // closest → lime/amber alternative below
    { label: 'Yellow', value: 'Yellow', color: '#FFFF00', tailwinf: 'bg-yellow-400' },
    { label: 'Navy Blue', value: 'Navy Blue', color: '#000080', tailwinf: 'bg-blue-900' },
    { label: 'Magenta', value: 'Magenta', color: '#FF00FF', tailwinf: 'bg-fuchsia-400' },
    { label: 'Grey', value: 'Grey', color: '#808080', tailwinf: 'bg-gray-400' },
    { label: 'Green', value: 'Green', color: '#008000', tailwinf: 'bg-green-400' },
    { label: 'Orange', value: 'Orange', color: '#FFA500', tailwinf: 'bg-orange-400' },
    { label: 'Purple', value: 'Purple', color: '#800080', tailwinf: 'bg-purple-400' },
    { label: 'Turquoise Blue', value: 'Turquoise Blue', color: '#40E0D0', tailwinf: 'bg-teal-400' },
    { label: 'Peach', value: 'Peach', color: '#FFDAB9', tailwinf: 'bg-orange-200' },
    { label: 'Off White', value: 'Off White', color: '#F8F8F0', tailwinf: 'bg-neutral-100' },
    { label: 'Teal', value: 'Teal', color: '#008080', tailwinf: 'bg-teal-500' },
    { label: 'Sea Green', value: 'Sea Green', color: '#2E8B57', tailwinf: 'bg-emerald-500' },
    { label: 'Lime Green', value: 'Lime Green', color: '#32CD32', tailwinf: 'bg-lime-400' },
    { label: 'Brown', value: 'Brown', color: '#A52A2A', tailwinf: 'bg-amber-800' },
    { label: 'Lavender', value: 'Lavender', color: '#E6E6FA', tailwinf: 'bg-violet-200' },
    { label: 'Beige', value: 'Beige', color: '#F5F5DC', tailwinf: 'bg-stone-200' },
    { label: 'Khaki', value: 'Khaki', color: '#F0E68C', tailwinf: 'bg-yellow-300' },
    { label: 'Multi', value: 'Multi', color: '#CCCCCC', tailwinf: 'bg-gradient-to-r from-blue-400 via-green-400 to-purple-400' },
    { label: 'Maroon', value: 'Maroon', color: '#800000', tailwinf: 'bg-red-900' },
    { label: 'Cream', value: 'Cream', color: '#FFFDD0', tailwinf: 'bg-yellow-100' },
    { label: 'Rust', value: 'Rust', color: '#B7410E', tailwinf: 'bg-orange-800' },
    { label: 'Grey Melange', value: 'Grey Melange', color: '#BEBEBE', tailwinf: 'bg-gray-300' },
  ]);


  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);


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

        selectedCategory,
        setSelectedCategory,
        selectedLocation,
        setSelectedLocation,
        selectedGender,
        setSelectedGender,
        selectedColor, setSelectedColor,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
