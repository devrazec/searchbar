'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, Rating, RatingStar } from 'flowbite-react';

const HeaderColor = () => {
    const {
        filteredProduct,
        selectedColor,
        setSelectedColor,
    } = useContext(GlobalContext);

    const countProductsByColor = (products = []) =>
        products.reduce((acc, p) => {
            acc[p.colorId] = (acc[p.colorId] || 0) + 1;
            return acc;
        }, {});

    const colorCounts = useMemo(
        () => countProductsByColor(filteredProduct || []),
        [filteredProduct]
    );

    const toggleColor = value => {
        setSelectedColor(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div>
            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                Colour
            </h6>
            <div className="space-y-2">
                <div className="flex items-center">
                    <Checkbox id="blue" name="blue" />
                    <Label
                        htmlFor="blue"
                        className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                        Blue
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox id="gray" name="gray" />

                    <Label
                        htmlFor="gray"
                        className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                        Gray
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox
                        defaultChecked
                        id="green"
                        name="green"
                    />
                    <Label
                        htmlFor="green"
                        className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                        Green
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox id="pink" name="pink" />
                    <Label
                        htmlFor="pink"
                        className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                        Pink
                    </Label>
                </div>
                <div className="flex items-center">
                    <Checkbox
                        defaultChecked
                        id="red"
                        name="red"
                    />
                    <Label
                        htmlFor="red"
                        className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                        Red
                    </Label>
                </div>
            </div>
        </div>
    );
};

export default React.memo(HeaderColor);
