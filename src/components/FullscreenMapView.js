'use client';

import { useMap } from 'react-leaflet';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useFullscreenMap } from '../hooks/useFullscreenMap';

const FullscreenMapView = () => {
  const map = useMap();
  const { setGeoZoomView } = useContext(GlobalContext);

  useFullscreenMap(map, {
    onEnter: () => setGeoZoomView(8),
    onExit: () => setGeoZoomView(6),
  });

  return null;
};

export default FullscreenMapView;
