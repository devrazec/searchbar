'use client';

import React, { useContext, useState } from 'react';
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
import {
    ArrowRight,
    ArrowRightToBracket,
    ArrowsRepeat,
    Bars,
    Bell,
    BookOpen,
    Cart,
    ChevronDown,
    Cog,
    ComputerSpeaker,
    Dollar,
    GiftBox,
    Heart,
    Lock,
    MailBox,
    MapPin,
    Minus,
    Moon,
    Plus,
    QuestionCircle,
    Search,
    ShoppingBag,
    Store,
    Sun,
    TrashBin,
    Truck,
    User,
    UserCircle,
    Wallet,
} from 'flowbite-react-icons/outline';
import { FaChevronDown } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const LocationIcon = () => {
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
        <Dropdown
            arrowIcon={false}
            inline
            label={
                <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                    <MapPin className="h-5 w-5" />
                </span>
            }
            theme={{
                content: twMerge(theme.dropdown.content, 'my-1 w-72 rounded-lg'),
                floating: {
                    base: twMerge(theme.dropdown.floating.base, 'z-10 w-82 divide-y rounded-lg'),
                },
                inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    'hover:underline dark:text-white'
                ),
            }}
        >
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-3 border-b p-5 dark:border-gray-600">
                <ul className="space-y-2 p-2 text-sm">
                    <li className="flex items-center justify-between gap-y-3">
                        <div className="flex items-center">
                            <Checkbox id="all" name="all" />
                            <div className="ml-2 h-3 w-3 rounded-full border-2"></div>
                            <label
                                htmlFor="all"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                All
                            </label>
                        </div>
                        <div className="text-gray-400">244</div>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="admitted" name="admitted" />
                            <div className="ml-2 h-3 w-3 rounded-full border-2 border-green-400 bg-green-400"></div>
                            <label
                                htmlFor="admitted"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                Admitted
                            </label>
                        </div>
                        <div className="text-gray-400">123</div>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                defaultChecked
                                id="temporarily-admitted"
                                name="temporarily-admitted"
                            />
                            <div className="ml-2 h-3 w-3 rounded-full border-2 border-primary-500 bg-primary-500"></div>
                            <label
                                htmlFor="temporarily-admitted"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                Temporarily admitted
                            </label>
                        </div>
                        <div className="text-gray-400">22</div>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="awaiting-verification" name="awaiting-verification" />
                            <div className="ml-2 h-3 w-3 rounded-full border-2 border-gray-200 bg-gray-200"></div>
                            <label
                                htmlFor="awaiting-verification"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                Awaiting verification
                            </label>
                        </div>
                        <div className="text-gray-400">12</div>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="requires-recheck" name="requires-recheck" />
                            <div className="ml-2 h-3 w-3 rounded-full border-2 border-orange-300 bg-orange-300"></div>
                            <label
                                htmlFor="requires-recheck"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                Requires recheck
                            </label>
                        </div>
                        <div className="text-gray-400">56</div>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="rejected" name="rejected" />
                            <div className="ml-2 h-3 w-3 rounded-full border-2 border-red-500 bg-red-500"></div>
                            <label
                                htmlFor="rejected"
                                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                            >
                                Rejected
                            </label>
                        </div>
                        <div className="text-gray-400">6</div>
                    </li>
                </ul>
            </div>
            <div className="mx-2 mb-2">
                <div className="relative">


                </div>
            </div>

        </Dropdown>
    );
};

export default React.memo(LocationIcon);
