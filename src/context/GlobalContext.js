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

import geoPortugalJson from '../data/geo-portugal.json';
import geoLisbonJson from '../data/geo-lisbon.json';
import geoPortoJson from '../data/geo-porto.json';
import geoFaroJson from '../data/geo-faro.json';
import geoCoimbraJson from '../data/geo-coimbra.json';
import geoBragaJson from '../data/geo-braga.json';
import geoBragancaJson from '../data/geo-braganca.json';
import geoLeiriaJson from '../data/geo-leiria.json';
import geoGuardaJson from '../data/geo-guarda.json';
import geoBejaJson from '../data/geo-beja.json';
import geoVianaJson from '../data/geo-viana.json';
import geoVilarealJson from '../data/geo-vilareal.json';
import geoSetubalJson from '../data/geo-setubal.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const { mode, setMode } = useThemeMode();
  const [themeMode, setThemeMode] = useState(() => mode || 'dark');

  const [product, setProduct] = useState(dataProductJson.slice(0, 200));
  const [category, setCategory] = useState(dataCategoryJson);
  const [location, setLocation] = useState(dataLocationJson);
  const [gender, setGender] = useState(dataGenderJson);
  const [color, setColor] = useState(dataColorJson);
  const [seller, setSeller] = useState(dataSellerJson);
  const [brand, setBrand] = useState(dataBrandJson);
  const [delivery, setDelivery] = useState(30);
  const [productPrice, setProductPrice] = useState(100);
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null,
  });

  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);

  const [sellerGrouped, setSellerGrouped] = useState(dataSellerGroupedJson);
  const [brandGrouped, setBrandGrouped] = useState(dataBrandGroupedJson);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedRate, setSelectedRate] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState([1, 30]);
  const [selectedPrice, setSelectedPrice] = useState([1, 100]);

  const [geoZoomView, setGeoZoomView] = useState(6);
  const [geoInitialView, setGeoInitialView] = useState([39.3999, -8.2245]);

  const [geoPortugal, setGeoPortugal] = useState(geoPortugalJson);
  const [geoLisbon, setGeoLisbon] = useState(geoLisbonJson);
  const [geoPorto, setGeoPorto] = useState(geoPortoJson);
  const [geoFaro, setGeoFaro] = useState(geoFaroJson);
  const [geoCoimbra, setGeoCoimbra] = useState(geoCoimbraJson);
  const [geoBraga, setGeoBraga] = useState(geoBragaJson);
  const [geoBraganca, setGeoBraganca] = useState(geoBragancaJson);
  const [geoLeiria, setGeoLeiria] = useState(geoLeiriaJson);
  const [geoGuarda, setGeoGuarda] = useState(geoGuardaJson);
  const [geoBeja, setGeoBeja] = useState(geoBejaJson);
  const [geoViana, setGeoViana] = useState(geoVianaJson);
  const [geoVilaReal, setGeoVilaReal] = useState(geoVilarealJson);
  const [geoSetubal, setGeoSetubal] = useState(geoSetubalJson);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [hoverProductId, setHoverProductId] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const [totalProduct, setTotalProduct] = useState(product.length);
  const [totalBrand, setTotalBrand] = useState(brand.length);
  const [totalSeller, setTotalSeller] = useState(seller.length);
  const [totalCategory, setCategorySeller] = useState(category.length);
  const [totalFilteredProduct, setTotalFilteredProduct] = useState(
    filteredProduct.length
  );

  //useEffect(() => {
  //setThemeMode(mode);
  //}, [mode]);

  //const [product, setProduct] = useState(dataProductJson.slice(0, 200));
  //const [filteredProduct, setFilteredProduct] = useState([]);

  const parseISODate = iso => {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  useEffect(() => {
    if (!product) {
      setFilteredProduct([]);
      return;
    }

    let filtered = [...product];

    if (selectedProductName) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(selectedProductName.toLowerCase())
      );
    }

    if (selectedGender.length > 0) {
      filtered = filtered.filter(p => selectedGender.includes(p.genderId));
    }

    if (selectedPrice[0] > 1 || selectedPrice[1] < 100) {
      filtered = filtered.filter(
        p => p.price >= selectedPrice[0] && p.price <= selectedPrice[1]
      );
    }

    if (selectedDelivery[0] > 1 || selectedDelivery[1] < 30) {
      filtered = filtered.filter(
        p =>
          p.delivery >= selectedDelivery[0] && p.delivery <= selectedDelivery[1]
      );
    }

    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter(p => {
        const productDate = parseISODate(p.date);

        if (dateRange.start && productDate <= dateRange.start) return false;
        if (dateRange.end && productDate >= dateRange.end) return false;

        return true;
      });
    }

    if (selectedRate.length > 0) {
      filtered = filtered.filter(p => selectedRate.includes(p.rateId));
    }

    if (selectedCategory.length > 0) {
      filtered = filtered.filter(p => selectedCategory.includes(p.categoryId));
    }

    if (selectedColor.length > 0) {
      filtered = filtered.filter(p => selectedColor.includes(p.colorId));
    }

    if (selectedLocation.length > 0) {
      filtered = filtered.filter(p => selectedLocation.includes(p.locationId));
    }

    // Sorting
    if (sortField) {
      filtered.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (sortField === 'price') {
          // Remove any non-digit characters (like currency symbols) and convert to number
          valA = Number(String(valA).replace(/[^\d.-]/g, ''));
          valB = Number(String(valB).replace(/[^\d.-]/g, ''));
        } else if (typeof valA === 'string') {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }

        if (valA < valB) return sortOrder === 1 ? -1 : 1;
        if (valA > valB) return sortOrder === 1 ? 1 : -1;
        return 0;
      });
    }

    setFilteredProduct(filtered);
  }, [
    product,
    selectedCategory,
    selectedLocation,
    selectedColor,
    selectedGender,
    selectedProductName,
    selectedRate,
    selectedPrice,
    selectedDelivery,
    //dateRange,
    sortField,
    sortOrder,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        themeMode,
        setThemeMode,
        product,
        setProduct,
        category,
        setCategory,
        location,
        setLocation,
        gender,
        setGender,
        color,
        setColor,
        seller,
        setSeller,
        brand,
        setBrand,
        delivery,
        setDelivery,
        productPrice,
        setProductPrice,
        dateRange,
        setDateRange,
        dateStart,
        setDateStart,
        dateEnd,
        setDateEnd,
        sellerGrouped,
        setSellerGrouped,
        brandGrouped,
        setBrandGrouped,

        selectedCategory,
        setSelectedCategory,
        selectedLocation,
        setSelectedLocation,
        selectedGender,
        setSelectedGender,
        selectedColor,
        setSelectedColor,
        selectedSeller,
        setSelectedSeller,
        selectedBrand,
        setSelectedBrand,
        selectedRate,
        setSelectedRate,
        selectedPrice,
        setSelectedPrice,
        selectedDelivery,
        setSelectedDelivery,
        geoZoomView,
        setGeoZoomView,
        geoInitialView,
        setGeoInitialView,

        geoPortugal,
        setGeoPortugal,
        geoLisbon,
        setGeoLisbon,
        geoPorto,
        setGeoPorto,
        geoFaro,
        setGeoFaro,
        geoCoimbra,
        setGeoCoimbra,
        geoBraga,
        setGeoBraga,
        geoBraganca,
        setGeoBraganca,
        geoLeiria,
        setGeoLeiria,
        geoGuarda,
        setGeoGuarda,
        geoBeja,
        setGeoBeja,
        geoViana,
        setGeoViana,
        geoVilaReal,
        setGeoVilaReal,
        geoSetubal,
        setGeoSetubal,

        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        setSelectedProduct,
        hoverProductId,
        setHoverProductId,
        selectedProductName,
        setSelectedProductName,
        filteredProduct,
        setFilteredProduct,

        sortField,
        setSortField,
        sortOrder,
        setSortOrder,

        totalProduct,
        setTotalProduct,
        totalBrand,
        setTotalBrand,
        totalSeller,
        setTotalSeller,
        totalCategory,
        setCategorySeller,
        totalFilteredProduct,
        setTotalFilteredProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
