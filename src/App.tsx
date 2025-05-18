import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";

function App() {
    return (
        <MapComponent
            options={{
                mapKey: import.meta.env.VITE_NESHAN_API_KEY,
                mapType: MapTypes.neshanRaster,
                zoom: 11,
                center: [51.389, 35.6892],
            }}
        />
    );
}

export default App;
