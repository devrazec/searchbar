'use client';

import React, { useContext, useMemo, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  TabItem,
  Tabs,
} from 'flowbite-react';
import { HiBars2, HiSquaresPlus } from 'react-icons/hi2';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { FaCog, FaFilter } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { Bars, Search, TrashBin } from 'flowbite-react-icons/outline';

import HeaderSeller from './HeaderSeller';
import HeaderBrand from './HeaderBrand';
import HeaderCategory from './HeaderCategory';
import HeaderColor from './HeaderColor';
import HeaderRate from './HeaderRate';
import HeaderGender from './HeaderGender';
import HeaderLocation from './HeaderLocation';
import HeaderPrice from './HeaderPrice';
import HeaderDelivery from './HeaderDelivery';
import HeaderAge from './HeaderAge';
import HeaderSize from './HeaderSize';
import HeaderDate from './HeaderDate';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
});

const DrawerEdge = () => {
  const {
    themeMode,
    setSelectedGender,
    setSelectedDelivery,
    setSelectedPrice,
    setSelectedRate,
    setDateStart,
    setDateEnd,
    setDateResetKey,
    setSelectedCategory,
    setSelectedColor,
    setSelectedLocation,
    filteredProduct,
    setSelectedAge,
    setSelectedSize,
    setSelectedBrand,
    setSelectedSeller,
    brand,
    seller,
    selectedBrand,
    product,
    selectedSeller,
  } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const totalProducts = useMemo(() => {
    return filteredProduct?.length ?? 0;
  }, [filteredProduct]);

  const resetAll = () => {
    setSelectedGender([]);
    setSelectedDelivery([1, 30]);
    setSelectedPrice([1, 100]);
    setSelectedRate([]);
    setDateStart(null);
    setDateEnd(null);
    setDateResetKey(k => k + 1);
    setSelectedCategory([]);
    setSelectedColor([]);
    setSelectedLocation([]);
    setSelectedAge([1, 12]);
    setSelectedSize([]);
    setSelectedBrand([]);
    setSelectedSeller([]);
  };

  return (
    <Drawer
      edge
      open={isOpen}
      onClose={handleClose}
      position="bottom"
      className="p-0 h-195"
    >
      <DrawerHeader
        closeIcon={HiBars2}
        title={`Advanced Filters | Total Products ${totalProducts}`}
        titleIcon={FaFilter}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
      />

      <DrawerItems className="p-4">
        <Tabs aria-label="Default tabs" variant="underline">
          <TabItem active title="Filters" icon={HiAdjustments}>
            <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderDate />
                <HeaderDelivery />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderGender />
                <HeaderAge />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderPrice />
                <HeaderSize />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderRate />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderLocation />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderCategory />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <HeaderColor />
              </div>
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <LeafletMap />
              </div>
            </div>
          </TabItem>
          <TabItem title="Sellers" icon={HiUserCircle}>
            <HeaderSeller />
          </TabItem>
          <TabItem title="Brands" icon={HiSquaresPlus}>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div className="flex flex-col gap-5 cursor-pointer rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <HeaderBrand />
              </div>
            </div>
          </TabItem>
          <TabItem
            title={
              <Button
                type="button"
                onClick={e => {
                  e.stopPropagation(); // prevent tab activation
                  resetAll();
                }}
                className="flex items-center gap-2"
              >
                <TrashBin className="h-4 w-4" />
                Reset All
              </Button>
            }
          />
          <TabItem
            title={
              <Button
                type="button"
                onClick={e => {
                  e.stopPropagation(); // prevent tab activation
                }}
                className="flex items-center gap-2"
              >
                Total Products {product.length} | Filtered {totalProducts}
              </Button>
            }
          />
          <TabItem
            title={
              <Button
                type="button"
                onClick={e => {
                  e.stopPropagation(); // prevent tab activation
                }}
                className="flex items-center gap-2"
              >
                Total Sellers {seller.length} | Selected {selectedSeller.length}
              </Button>
            }
          />

          <TabItem
            title={
              <Button
                type="button"
                onClick={e => {
                  e.stopPropagation(); // prevent tab activation
                }}
                className="flex items-center gap-2"
              >
                Total Brands {brand.length} | Selected {selectedBrand.length}
              </Button>
            }
          />
        </Tabs>
      </DrawerItems>
    </Drawer>
  );
};

export default React.memo(DrawerEdge);
