'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { createRoot } from 'react-dom/client';
import { Expand } from 'flowbite-react-icons/outline';

export function useFullscreenMap(
  map,
  {
    onEnter,
    onExit,
  } = {}
) {
  const buttonRef = useRef(null);
  const rootRef = useRef(null);

  // Add control button
  useEffect(() => {
    if (!map) return;

    const zoomControl = document.querySelector('.leaflet-control-zoom');
    if (!zoomControl) return;

    const btn = L.DomUtil.create(
      'a',
      'leaflet-control-zoom-in leaflet-control-fullscreen',
      zoomControl
    );

    btn.href = '#';
    btn.title = 'Toggle fullscreen';

    Object.assign(btn.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
    });

    L.DomEvent.disableClickPropagation(btn);
    L.DomEvent.disableScrollPropagation(btn);

    // React icon inside Leaflet control
    const iconContainer = document.createElement('span');
    btn.appendChild(iconContainer);

    const root = createRoot(iconContainer);
    root.render(<Expand style={{ fontSize: 18 }} />);

    btn.onclick = e => {
      e.preventDefault();
      const container = map.getContainer();

      if (!document.fullscreenElement) {
        container.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };

    buttonRef.current = btn;
    rootRef.current = root;

    return () => {
      root.unmount();
      btn.remove();
    };
  }, [map]);

  // Handle fullscreen change
  useEffect(() => {
    if (!map) return;

    const onFullscreenChange = () => {
      const isFullscreen = !!document.fullscreenElement;

      // Leaflet needs this after resizing
      setTimeout(() => {
        map.invalidateSize();
      }, 150);

      if (isFullscreen) onEnter?.();
      else onExit?.();
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, [map, onEnter, onExit]);
}
