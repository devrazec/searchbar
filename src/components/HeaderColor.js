'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label } from 'flowbite-react';
import { HiOutlineX } from 'react-icons/hi';

const HeaderColor = () => {
    const {
        color,
        selectedColor,
        setSelectedColor,
        filteredProduct,
    } = useContext(GlobalContext);

    const colorCounts = useMemo(() => {
        return (filteredProduct || []).reduce((acc, p) => {
            acc[p.colorId] = (acc[p.colorId] || 0) + 1;
            return acc;
        }, {});
    }, [filteredProduct]);

    const toggleColor = value => {
        setSelectedColor(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    const resetColor = () => setSelectedColor([]);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h6 className="text-sm font-medium text-black dark:text-white">
                    Color
                </h6>

                <button
                    type="button"
                    onClick={resetColor}
                    disabled={selectedColor.length === 0}
                    title="Clear color filter"
                    className="
            inline-flex items-center justify-center
            rounded p-1
            text-gray-400 hover:text-gray-700
            dark:text-gray-500 dark:hover:text-gray-200
            disabled:opacity-40 disabled:cursor-not-allowed mr-8
          "
                >
                    <HiOutlineX className="h-4 w-4" />
                </button>
            </div>

            {/* Scroll container */}
            <div className="max-h-56 overflow-y-auto">
                <ul className="space-y-2 mt-1">
                    {color.map(cor => (
                        <li
                            key={cor.value}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center ml-2">
                                <Checkbox
                                    id={`color-${cor.value}`}
                                    checked={selectedColor.includes(cor.value)}
                                    onChange={() => toggleColor(cor.value)}
                                />

                                <Label
                                    htmlFor={`color-${cor.value}`}
                                    className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    <span
                                        className={`mr-2 h-3.5 w-3.5 rounded-full border ${cor.tailwind}`}
                                    />
                                    {cor.label}
                                </Label>
                            </div>

                            <span className="ml-2 w-6 text-right text-gray-400 text-sm mr-6">
                                {colorCounts[cor.value] ?? 0}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default React.memo(HeaderColor);
