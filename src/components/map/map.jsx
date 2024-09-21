import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
export default function Map() {


    return (
        // 41.2980499,69.2754893
        ////// 41.354155,69.332057
        <div style={{ height: '500px' }}>
            <MapContainer center={[41.2979517, 69.274248]} zoom={16} scrollWheelZoom={false} style={{ height: '100%', position: 'sticky' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.2979518, 69.274252]}>
                    <Popup>
                        Toshkent farmatsevtika instituti
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )

    
}