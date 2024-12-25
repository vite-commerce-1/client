import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IAddress } from "@/services/interfaces/address-interface";

import L from "leaflet";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";
import Loader from "@/components/shared/loader";
import ActionRemoveAddress from "@/features/address/components/action-remove-address";
import ActionSetDefaultAddress from "@/features/address/components/action-set-default-address";

interface IProps {
  address: IAddress;
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CardAddress = ({ address }: IProps) => {
  const {
    _id,
    detail,
    country,
    province,
    city,
    district,
    subDistrict,
    postalCode,
    coordinates,
    defaultAddress,
  } = address;

  if (!address) {
    return <Loader />;
  }

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize">{detail}</CardTitle>
        {defaultAddress && <Badge>Default</Badge>}
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Country:</span>
          <span className="text-muted-foreground">{country}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Province:</span>
          <span className="text-muted-foreground">{province}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">City:</span>
          <span className="text-muted-foreground">{city}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">District:</span>
          <span className="text-muted-foreground">{district}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Sub District:</span>
          <span className="text-muted-foreground">{subDistrict}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Postal Code:</span>
          <span className="text-muted-foreground">{postalCode}</span>
        </div>
        <div className="w-full flex items-start justify -between gap-x-3">
          <span className="font-medium text-nowrap">Detail:</span>
          <span className="text-muted-foreground text-justify">
            {country}, {province}, {city}, {district}, {subDistrict},{" "}
            {postalCode}, {detail}
          </span>
        </div>
        <MapContainer
          center={[coordinates?.latitude, coordinates?.longitude]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={markerIcon}
            position={[coordinates?.latitude, coordinates?.longitude]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </CardContent>
      <CardFooter className="space-x-4">
        <ActionRemoveAddress addressId={_id} />
        {!defaultAddress && <ActionSetDefaultAddress addressId={_id} />}
      </CardFooter>
    </Card>
  );
};

export default CardAddress;
