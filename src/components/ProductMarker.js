'use client';

import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { GlobalContext } from '../context/GlobalContext';
import { HiShoppingCart } from 'react-icons/hi';

const createPriceIcon = (item, isHovered) =>
  L.divIcon({
    className: 'price-marker',
    html: `
      <div
        class="
          px-2 py-1 text-sm font-bold rounded-xl border
          ${isHovered ? 'bg-black text-white' : 'bg-white text-black'}
        "
        style="border:1px solid rgba(0,0,0,0.1);"
      >
        ${item.price}
      </div>
    `,
    iconSize: [50, 30],
    iconAnchor: [25, 15],
  });

const ProductMarker = () => {
  const {
    hoverProductId,
    setHoverProductId,
    filteredProduct,
    setSelectedProduct,
  } = useContext(GlobalContext);

  return (
    <>
      {filteredProduct.map(item => (
        <Marker
          key={item.value}
          position={[item.lat, item.lng]}
          icon={createPriceIcon(item, hoverProductId === item.value)}
          eventHandlers={{
            click: () => setSelectedProduct(item),
            mouseover: () => setHoverProductId(item.value),
            mouseout: () => setHoverProductId(null),
          }}
        >
          <Popup maxWidth={220}>
            <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow">
              {/* Image */}
              <img
                src={`/searchbar/img/product/${item.image}`}
                alt={item.label}
                className="w-full h-32 object-cover rounded-t-lg"
              />

              {/* Content */}
              <div className="p-3 space-y-2">
                <h5
                  className="text-sm font-medium text-gray-900 line-clamp-2"
                >
                  {item.label}
                </h5>

                <div className="text-xs text-gray-600">
                  <span className="font-semibold">Location:</span>{' '}
                  {item.locationName}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-gray-900">
                    € {item.price}
                  </span>

                  <button
                    disabled={item.status === 'Rejected'}
                    className="
                      inline-flex items-center justify-center
                      rounded-lg px-3 py-2 text-sm font-medium
                      text-white bg-blue-600
                      hover:bg-blue-700
                      disabled:bg-gray-300 disabled:cursor-not-allowed
                    "
                  >
                    <HiShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default ProductMarker;
