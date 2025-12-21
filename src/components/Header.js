'use client';

import React, { useContext, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlobalContext } from '../context/GlobalContext';
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Label,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Rating,
  RatingStar,
  TextInput,
  theme,
  ToggleSwitch,
  Tooltip,
  DarkThemeToggle,
  useThemeMode,
  Tabs,
  Radio,
  RangeSlider,
} from 'flowbite-react';

import { Bars, Search } from 'flowbite-react-icons/outline';
import { twMerge } from 'tailwind-merge';
import { FaCog, FaFilter } from 'react-icons/fa';

import { Icon } from '@iconify-icon/react';
import HeaderLocationIcon from './HeaderLocationIcon';
import HeaderSeller from './HeaderSeller';
import HeaderBrand from './HeaderBrand';
import HeaderCategory from './HeaderCategory';
import HeaderColor from './HeaderColor';
import HeaderRate from './HeaderRate';
import HeaderGender from './HeaderGender';
import HeaderLocation from './HeaderLocation';
import HeaderPrice from './HeaderPrice';
import HeaderDelivery from './HeaderDelivery';
import HeaderDate from './HeaderDate';

const Header = () => {
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
  } = useContext(GlobalContext);

  const resetAll = () => {
    setSelectedGender([]);
    setSelectedDelivery([1, 30]);
    setSelectedPrice([1, 100]);
    setSelectedRate([]);
    setDateStart(null);
    setDateEnd(null);
    setDateResetKey((k) => k + 1);
    setSelectedCategory([]);
    setSelectedColor([]);
    setSelectedLocation([]);
  };

  const totalProduct = useMemo(() => {
    return filteredProduct?.length ?? 0;
  }, [filteredProduct]);

  return (
    <>
      <Navbar
        fluid
        className="mx-0 w-full max-w-full flex-col px-4 py-3 bg-white dark:bg-gray-800"
      >
        <div className="lg:flex lg:items-center lg:gap-8 justify-center">
          <NavbarBrand>
            {/* Light mode */}
            <>
              <div className="flex items-center gap-2 h-8 text-gray-900 dark:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                >
                  <g fill="none" stroke="#000" strokeWidth={4}>
                    <path strokeLinecap="round" d="M4 7H44" />
                    <path strokeLinecap="round" d="M4 23H15" />
                    <path strokeLinecap="round" d="M4 39H15" />
                    <path
                      fill="#3b82f6"
                      d="M31.5 34C36.1944 34 40 30.1944 40 25.5C40 20.8056 36.1944 17 31.5 17C26.8056 17 23 20.8056 23 25.5C23 30.1944 26.8056 34 31.5 34Z"
                    />
                    <path strokeLinecap="round" d="M37 32L44 39.0505" />
                  </g>
                </svg>

                <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
                  Search<span className="text-blue-500">Bar</span>
                </span>
              </div>

              {/* Dark mode */}

              <div className="hidden dark:flex items-center gap-2 h-8 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                >
                  <g fill="none" stroke="#fff" strokeWidth={4}>
                    <path strokeLinecap="round" d="M4 7H44" />
                    <path strokeLinecap="round" d="M4 23H15" />
                    <path strokeLinecap="round" d="M4 39H15" />
                    <path
                      fill="#3b82f6"
                      d="M31.5 34C36.1944 34 40 30.1944 40 25.5C40 20.8056 36.1944 17 31.5 17C26.8056 17 23 20.8056 23 25.5C23 30.1944 26.8056 34 31.5 34Z"
                    />
                    <path strokeLinecap="round" d="M37 32L44 39.0505" />
                  </g>
                </svg>

                <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
                  Search<span className="text-blue-500">Bar</span>
                </span>
              </div>
            </>
          </NavbarBrand>

          <div className="relative hidden lg:block">
            <TextInput
              icon={() => (
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
              id="default-search"
              name="default-search"
              placeholder="Search..."
              required
              size={45}
              type="search"
              className="[&_input]:py-4"
            />

            {/* Dropdown positioned absolutely */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Dropdown
                color="blue"
                label={<FaFilter className="h-3 w-3 text-gray-50" />}
                placement="bottom"
                theme={{
                  arrowIcon: 'hidden',
                  content: twMerge(
                    theme.dropdown.content,
                    'w-auto min-w-[24rem] md:min-w-[48rem] max-w-[95vw] rounded-lg p-4 dark:bg-gray-800'
                  ),
                  floating: {
                    base: twMerge(
                      theme.dropdown.floating.base,
                      'w-auto min-w-[24rem] md:min-w-[48rem] max-w-[95vw] rounded-lg dark:divide-gray-800'
                    ),
                  },
                }}
              >
                <div className="mx-0 w-full max-w-full dark:bg-gray-800">
                  <div className="mb-4">
                    <Tabs
                      variant="underline"
                      theme={{
                        tablist: {
                          tabitem: {
                            base: twMerge(
                              theme.tabs.tablist.tabitem.base,
                              'p-2 first:pl-0 focus:ring-0'
                            ),
                            variant: {
                              underline: {
                                active: {
                                  on: twMerge(
                                    theme.tabs.tablist.tabitem.variant.underline
                                      .active.on,
                                    'text-blue-600 dark:text-blue-500'
                                  ),
                                  off: twMerge(
                                    theme.tabs.tablist.tabitem.variant.underline
                                      .active.off,
                                    'focus:ring-0 dark:hover:border-transparent'
                                  ),
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      <Tabs.Item active title="Advanced Filters">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <HeaderGender />
                            <HeaderDelivery />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="grid grid-cols-1 gap-3">
                              <HeaderPrice />
                              <HeaderDate />
                            </div>
                            <HeaderRate />
                          </div>
                          <div className="grid grid-cols-2 gap-3"></div>
                          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            <HeaderCategory />
                            <HeaderColor />
                            <HeaderLocation />
                          </div>
                        </div>
                      </Tabs.Item>
                      <Tabs.Item title="Seller">
                        <HeaderSeller />
                      </Tabs.Item>
                      <Tabs.Item title="Brand">
                        <HeaderBrand />
                      </Tabs.Item>
                    </Tabs>
                  </div>
                  <div className="mt-5 flex items-center justify-between space-x-4 rounded-b dark:border-gray-600">
                    <Button color="gray" type="reset" onClick={resetAll}>
                      Reset All
                    </Button>

                    <div className="mt-2 flex items-center justify-between border-t pt-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Total Products
                      </span>
                      <span className="w-8 text-right ml-2 font-semibold text-gray-700 dark:text-gray-300">
                        {totalProduct}
                      </span>
                    </div>

                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <NavbarCollapse
              theme={{
                list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium',
              }}
              className="hidden lg:block mx-3"
            >
              <NavbarLink
                active
                href="#"
                className="border-b border-gray-100 bg-transparent text-blue-700 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 md:border-0"
              >
                Home
              </NavbarLink>
              <NavbarLink href="#">Features</NavbarLink>
              <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
          </div>
          <div className="flex items-center">
            <span className="mx-3 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />
          </div>

          <Tooltip
            content={
              themeMode === 'light' ? 'Toggle dark mode' : 'Toggle light mode'
            }
          >
            <DarkThemeToggle />
          </Tooltip>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Current language</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                  className="h-5 w-5 rounded-full"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z" />
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth="300"
                  />
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            />
                            <use xlinkHref="#a" y="420" />
                            <use xlinkHref="#a" y="840" />
                            <use xlinkHref="#a" y="1260" />
                          </g>
                          <use xlinkHref="#a" y="1680" />
                        </g>
                        <use xlinkHref="#b" x="247" y="210" />
                      </g>
                      <use xlinkHref="#c" x="494" />
                    </g>
                    <use xlinkHref="#d" x="988" />
                    <use xlinkHref="#c" x="1976" />
                    <use xlinkHref="#e" x="2470" />
                  </g>
                </svg>
              </span>
            }
          >
            <ul className="py-1" role="none">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    <span className="whitespace-nowrap">English (US)</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    Deutsch
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    Italiano
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs>
                        <path
                          id="a"
                          fill="#ffde00"
                          d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                        />
                      </defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlinkHref="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlinkHref="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlinkHref="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlinkHref="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlinkHref="#a"
                      />
                    </svg>
                    <span className="whitespace-nowrap">中文 (繁體)</span>
                  </div>
                </Link>
              </li>
            </ul>
          </Dropdown>

          <HeaderLocationIcon />
          <NavbarToggle
            barIcon={() => (
              <span className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Bars className="h-5 w-5" />
              </span>
            )}
            className="md:hidden"
          />
        </div>
        <div className="mt-3 lg:hidden relative">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <TextInput
            icon={() => <Search className="h-5 w-5 dark:text-gray-400" />}
            id="default-search"
            name="default-search"
            placeholder="Search..."
            required
            size={72}
            type="search"
            className="[&_input]:py-4" // add right padding for dropdown
          />

          {/* Dropdown positioned on the right */}
          <div className="absolute right-1 inset-y-0 end-0 flex items-center pe-2">
            <Dropdown
              color="blue"
              label={<FaFilter className="h-4 w-4 text-gray-50" />}
              placement="bottom"
              theme={{
                arrowIcon: 'hidden',
                content: twMerge(theme.dropdown.content, 'w-48 p-3'),
                floating: {
                  target: twMerge(theme.dropdown.floating.target, 'flex-1'),
                },
              }}
            >
              {/* Dropdown items */}
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </Dropdown>
          </div>
        </div>

        <NavbarCollapse className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 py-2 dark:border-gray-600 dark:bg-gray-700 md:hidden lg:hidden [&>ul]:mt-0">
          <NavbarLink
            href="#"
            active
            className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            Home
          </NavbarLink>
          <NavbarLink
            href="#"
            className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            Features
          </NavbarLink>
          <NavbarLink
            href="#"
            className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
          >
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default React.memo(Header);
