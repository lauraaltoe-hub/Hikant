import React, { useEffect, useRef, useState } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

interface LandmarkPoint {
  title: string;
  altitude: string;
  desc: string;
  lat: number;
  lng: number;
  isMain?: boolean;
}

const LANDMARKS: LandmarkPoint[] = [
  {
    title: 'Borgata Superiore, Marmora',
    altitude: '1,580 m',
    desc: 'HiKANT Retreat Venue · Padre Sergio’s Former Monastery & Library',
    lat: 44.4583,
    lng: 7.0933,
    isMain: true,
  },
  {
    title: 'Rocca la Meja',
    altitude: '2,831 m',
    desc: 'Iconic limestone peak & panoramic high plateau of Val Maira',
    lat: 44.3986,
    lng: 7.1264,
  },
  {
    title: 'Monte Chersogno',
    altitude: '3,026 m',
    desc: 'Highest summit of the upper Maira Valley',
    lat: 44.4828,
    lng: 6.9986,
  },
  {
    title: 'Colle del Preit',
    altitude: '2,083 m',
    desc: 'High mountain pass connecting Marmora pastures to high trails',
    lat: 44.4172,
    lng: 7.1081,
  },
  {
    title: 'Ponte Marmora',
    altitude: '944 m',
    desc: 'Valley floor access point leading up to Borgata Superiore',
    lat: 44.4688,
    lng: 7.1128,
  },
  {
    title: 'Torino Porta Nuova',
    altitude: '239 m',
    desc: 'Retreat meeting point · Collective shared transport departure',
    lat: 45.0622,
    lng: 7.6784,
  },
];

export const ValMairaGoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const apiKey =
    (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) ||
    'AIzaSyCUWx9FIMsu6239FzAfg_Yk6JLWgX0SH_U';

  const MARMORA_COORDS = { lat: 44.4583, lng: 7.0933 };

  useEffect(() => {
    let isMounted = true;

    setOptions({
      key: apiKey,
      v: 'weekly',
    });

    Promise.all([
      importLibrary('maps') as Promise<google.maps.MapsLibrary>,
      importLibrary('marker') as Promise<google.maps.MarkerLibrary>,
    ])
      .then(([mapsLib, markerLib]) => {
        if (!isMounted || !mapRef.current) return;

        // Initialize Google Map in Earth / Hybrid View with full intuitive mouse navigation
        const map = new mapsLib.Map(mapRef.current, {
          center: MARMORA_COORDS,
          zoom: 13,
          mapTypeId: 'hybrid', // Earth / Satellite view
          tilt: 45,
          // "greedy" allows direct mouse wheel scroll zoom without holding Ctrl!
          gestureHandling: 'greedy',
          scrollwheel: true,
          disableDoubleClickZoom: false,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['hybrid', 'terrain', 'satellite', 'roadmap'],
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
          fullscreenControl: true,
          streetViewControl: false,
          internalUsageAttributionIds: ['gmp_git_agentskills_v1'],
        });

        mapInstance.current = map;
        const infoWindow = new mapsLib.InfoWindow();
        infoWindowRef.current = infoWindow;

        // Add landmarks with mouse hover and click interactions
        LANDMARKS.forEach((pt) => {
          const marker = new markerLib.Marker({
            position: { lat: pt.lat, lng: pt.lng },
            map,
            title: `${pt.title} (${pt.altitude})`,
            icon: pt.isMain
              ? {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: '#48632C',
                  fillOpacity: 1,
                  strokeWeight: 2,
                  strokeColor: '#FFFFFF',
                }
              : {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 6,
                  fillColor: '#718C73',
                  fillOpacity: 0.9,
                  strokeWeight: 1.5,
                  strokeColor: '#FFFFFF',
                },
          });

          const popupHtml = `
            <div style="font-family: inherit; font-size: 13px; line-height: 1.4; padding: 4px; color: #18231B;">
              <strong style="font-size: 14px;">${pt.title}</strong><br/>
              <span style="color: #48632C; font-weight: 600;">Altitude: ${pt.altitude}</span><br/>
              <span style="color: #4B5563; font-size: 12px; margin-top: 2px; display: inline-block;">${pt.desc}</span>
            </div>
          `;

          // Mouse hover opens the info window immediately
          marker.addListener('mouseover', () => {
            infoWindow.setContent(popupHtml);
            infoWindow.open(map, marker);
          });

          // Mouse click centers map on the point
          marker.addListener('click', () => {
            infoWindow.setContent(popupHtml);
            infoWindow.open(map, marker);
            map.panTo({ lat: pt.lat, lng: pt.lng });
          });

          if (pt.isMain) {
            infoWindow.setContent(popupHtml);
            infoWindow.open(map, marker);
          }
        });

        setLoading(false);
      })
      .catch((err: unknown) => {
        if (!isMounted) return;
        console.error('Google Maps load error:', err);
        setLoadError('Unable to load Google Maps. Please check your internet connection.');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-3 my-8">
      {/* Clean title without extra button controls */}
      <div>
        <h2 className="text-2xl font-serif font-normal text-black">
          Google Maps — Val Maira (Earth View)
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Explore with your mouse: scroll to zoom in and out, click and drag to pan across the valley, or hover over points to view elevations and landmarks.
        </p>
      </div>

      {/* Map Container with full mouse navigation */}
      <div className="relative w-full h-80 sm:h-96 md:h-[480px] bg-gray-100 border border-gray-300">
        <div ref={mapRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 text-sm text-gray-600">
            Loading Google Maps Earth View...
          </div>
        )}

        {loadError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 text-sm text-red-700 p-4 text-center">
            {loadError}
          </div>
        )}
      </div>
    </div>
  );
};
