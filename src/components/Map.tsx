"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapContainerRef.current && !mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current).setView([-22.7209, -47.6441], 15);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([-22.7209, -47.6441]).addTo(map);
      
      marker.bindPopup(`
        <b>LimpaPro</b><br>
        Rua São Joaquim, 240 - Santana, Piracicaba - SP<br>
        (19) 3542-0266
      `).openPopup();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="h-[250px] md:h-[300px] w-full rounded-lg shadow-md z-0"
      id="map"
    />
  );
};

export default Map;