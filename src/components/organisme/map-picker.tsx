import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapPickerProps {
  coordinates: [number, number];
  onCoordinatesChange: (coords: [number, number]) => void;
}

const MapPicker = ({ coordinates, onCoordinatesChange }: MapPickerProps) => {
  const DefaultPosition: LatLngExpression = coordinates;

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        onCoordinatesChange([lng, lat]);
      },
    });

    return (
      <Marker position={DefaultPosition}>
        <Popup>Selected Location</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={DefaultPosition}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPicker;
