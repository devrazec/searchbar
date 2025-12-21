'use client';

import React, { useContext, useState, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Dropdown, theme, Label } from 'flowbite-react';
import { MapPin } from 'flowbite-react-icons/outline';
import { twMerge } from 'tailwind-merge';

const HeaderSeller = () => {
  const {
    location,
    setLocation,
    selectedLocation,
    setSelectedLocation,
    dataProduct,
    setDataProduct,
    brand,
    setBrand,
    selectedBrand,
    setSelectedBrand,
  } = useContext(GlobalContext);

  const countProductsByBrand = (products = []) => {
    return products.reduce((acc, p) => {
      acc[p.brandId] = (acc[p.brandId] || 0) + 1;
      return acc;
    }, {});
  };

  const brandCounts = useMemo(
    () => countProductsByBrand(dataProduct || []),
    [dataProduct]
  );

  const totalProducts = useMemo(() => dataProduct?.length ?? 0, [dataProduct]);

  const toggleBrand = value => {
    setSelectedBrand(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          A
        </h5>
        <div className="flex items-center">
          <Checkbox id="apple" name="apple" />
          <Label
            htmlFor="apple"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Apple (56)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="asus" name="asus" />
          <Label
            htmlFor="asus"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Asus (97)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="acer" name="acer" />
          <Label
            htmlFor="acer"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Acer (234)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="allview" name="allview" />
          <Label
            htmlFor="allview"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Allview (45)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="atari" name="atari" />
          <Label
            htmlFor="asus"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Atari (176)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="amd" name="amd" />
          <Label
            htmlFor="amd"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            AMD (49)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="aruba" name="aruba" />
          <Label
            htmlFor="aruba"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Aruba (16)
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          B
        </h5>
        <div className="flex items-center">
          <Checkbox id="beats" name="beats" />
          <Label
            htmlFor="beats"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Beats (56)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox defaultChecked id="bose" name="bose" />
          <Label
            htmlFor="bose"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bose (97)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="benq" name="benq" />
          <Label
            htmlFor="benq"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            BenQ (45)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="bosch" name="bosch" />
          <Label
            htmlFor="bosch"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bosch (176)
          </Label>
        </div>
        <div className="flex items-center">
          <input
            id="brother"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
          />
          <Label
            htmlFor="brother"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Brother (176)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="biostar" name="biostar" />
          <Label
            htmlFor="biostar"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Biostar (49)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="braun" name="braun" />
          <Label
            htmlFor="braun"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Braun (16)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="blaupunkt" name="blaupunkt" />
          <Label
            htmlFor="blaupunkt"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Blaupunkt (45)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="benq2" name="benq2" />
          <Label
            htmlFor="benq2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            BenQ (23)
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          C
        </h5>
        <div className="flex items-center">
          <Checkbox id="canon" name="canon" />
          <Label
            htmlFor="canon"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Canon (49)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox defaultChecked id="cisco" name="cisco" />
          <Label
            htmlFor="cisco"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Cisco (97)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="cowon" name="cowon" />
          <Label
            htmlFor="cowon"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Cowon (234)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="clevo" name="clevo" />
          <Label
            htmlFor="clevo"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Clevo (45)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="corsair" name="corsair" />
          <Label
            htmlFor="corsair"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Corsair (15)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="csl" name="csl" />
          <Label
            htmlFor="csl"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Canon (49)
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          D
        </h5>
        <div className="flex items-center">
          <Checkbox id="dell" name="dell" />
          <Label
            htmlFor="dell"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dell (56)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="dogfish" name="dogfish" />
          <Label
            htmlFor="dogfish"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dogfish (24)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="dyson" name="dyson" />
          <Label
            htmlFor="dyson"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dyson (234)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="dobe" name="dobe" />
          <Label
            htmlFor="dobe"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dobe (5)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="digitus" name="digitus" />
          <Label
            htmlFor="digitus"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Digitus (1)
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          E
        </h5>
        <div className="flex items-center">
          <Checkbox id="emetec" name="emetec" />
          <Label
            htmlFor="emetec"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Emetec (56)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="extreme" name="extreme" />
          <Label
            htmlFor="extreme"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Extreme (10)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="elgato" name="elgato" />
          <Label
            htmlFor="elgato"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Elgato (234)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="emerson" name="emerson" />
          <Label
            htmlFor="emerson"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Emerson (45)
          </Label>
        </div>
        <div className="flex items-center">
          <input
            id="emi"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
          />
          <Label
            htmlFor="emi"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            EMI (176)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="fugoo" name="fugoo" />
          <Label
            htmlFor="fugoo"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fugoo (49)
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg font-medium uppercase text-black dark:text-white">
          F
        </h5>
        <div className="flex items-center">
          <Checkbox id="fujitsu" name="fujitsu" />
          <Label
            htmlFor="fujitsu"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fujitsu (97)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox defaultChecked id="fitbit" name="fitbit" />
          <Label
            htmlFor="fitbit"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fitbit (56)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="foxconn" name="foxconn" />
          <Label
            htmlFor="foxconn"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Foxconn (234)
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox id="floston" name="floston" />
          <Label
            htmlFor="floston"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Floston (45)
          </Label>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderSeller);
