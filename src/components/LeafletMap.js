'use client';

import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import ResetMapView from './ResetMapView';
import ShowMyLocation from './ShowMyLocation';
import PortugalLayer from './PortugalLayer';
import LocationLayer from './LocationLayer';
import ProductMarker from './ProductMarker';
import FullscreenMapView from './FullscreenMapView';

import { GlobalContext } from '../context/GlobalContext';

const LeafletMap = () => {
  const { geoZoomView, geoInitialView } = useContext(GlobalContext);

  return (
    <MapContainer
      center={geoInitialView}
      zoom={geoZoomView}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <TileLayer
        attribution="&copy; Devrazec contribution"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ResetMapView />
      <ShowMyLocation />
      <FullscreenMapView />
      <PortugalLayer />
      <LocationLayer />
      <ProductMarker />
    </MapContainer>
  );
};

export default React.memo(LeafletMap);
