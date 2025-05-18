import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import type SDKMap from "@neshan-maps-platform/mapbox-gl/dist/src/core/Map";

function App() {
    function mapSetter(map: SDKMap) {
        new nmp_mapboxgl.Marker({ color: "purple" }).setLngLat([51.31173, 35.758954]).addTo(map);

        const popup = new nmp_mapboxgl.Popup({ offset: 25 }).setText("Hold to move");
        new nmp_mapboxgl.Marker({
            color: "#00F955",
            draggable: true,
        })
            .setPopup(popup)
            .setLngLat([51.4055941, 35.70019216])
            .addTo(map)
            .togglePopup();
    }

    return (
        <MapComponent
            options={{
                mapKey: import.meta.env.VITE_NESHAN_API_KEY,
                mapType: MapTypes.neshanRaster,
                zoom: 11,
                center: [51.389, 35.6892],
                mapTypeControllerOptions: {
                    show: false,
                },
            }}
            mapSetter={mapSetter}
        />
    );
}

export default App;
