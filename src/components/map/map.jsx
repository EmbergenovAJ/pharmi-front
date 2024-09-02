import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
export default function Map() {


    return (
        // 41.2980499,69.2754893
        <div style={{ height: '500px' }}>
            <MapContainer center={[41.2980499, 69.2754893]} zoom={18} scrollWheelZoom={false} style={{ height: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.2980499, 69.2754893]}>
                    <Popup>
                        Toshkent farmatsevtika instituti
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}