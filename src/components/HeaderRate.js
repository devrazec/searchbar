'use client';

import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Checkbox, Label, Rating, RatingStar } from 'flowbite-react';

const HeaderRate = () => {
    const {
        filteredProduct,
        selectedRate,
        setSelectedRate,
    } = useContext(GlobalContext);

    const rates = [5, 4, 3, 2, 1];

    const countProductsByRate = (products = []) =>
        products.reduce((acc, p) => {
            acc[p.rateId] = (acc[p.rateId] || 0) + 1;
            return acc;
        }, {});

    const rateCounts = useMemo(
        () => countProductsByRate(filteredProduct || []),
        [filteredProduct]
    );

    const toggleRate = value => {
        setSelectedRate(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div>
            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                Rating
            </h6>

            <ul className="space-y-2">
                {rates.map(rate => (
                    <li
                        key={rate}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <Checkbox
                                id={`rate-${rate}`}
                                checked={selectedRate.includes(rate)}
                                onChange={() => toggleRate(rate)}
                            />

                            <Label
                                htmlFor={`rate-${rate}`}
                                className="ml-2 flex items-center"
                            >
                                <Rating>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <RatingStar
                                            key={i}
                                            filled={i < rate}
                                        />
                                    ))}
                                </Rating>
                            </Label>
                        </div>

                        <span className="w-6 text-right text-gray-400 text-sm mr-6">
                            {rateCounts[rate] ?? 0}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(HeaderRate);
