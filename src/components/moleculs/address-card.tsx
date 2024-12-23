import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Badge } from "../atoms/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import { Button } from "../atoms/button";
import { IAddress } from "@/services/interfaces/address-interface";
import { useDeleteAddress } from "@/services/api/address/use-remove-address";
import { useSetDefaultAddress } from "@/services/api/address/use-set-default-address";

import L from "leaflet";

interface IProps {
  address: IAddress;
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const AddressCard = ({ address }: IProps) => {
  const { mutate: deleteAddress } = useDeleteAddress();
  const { mutate: setAsDefault } = useSetDefaultAddress();

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize">{address?.detail}</CardTitle>
        {address?.defaultAddress && (
          <Badge>{address?.defaultAddress ? "Default" : "Not Default"}</Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Country : </span>
          <span className="text-muted-foreground">{address?.country}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Province : </span>
          <span className="text-muted-foreground">{address?.province}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">City : </span>
          <span className="text-muted-foreground">{address?.city}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">District : </span>
          <span className="text-muted-foreground">{address?.district}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Sub District : </span>
          <span className="text-muted-foreground">{address?.subDistrict}</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium">Postal Code : </span>
          <span className="text-muted-foreground">{address?.postalCode}</span>
        </div>
        <div className="w-full flex items-start justify-between gap-x-3">
          <span className="font-medium text-nowrap">Detail : </span>
          <span className="text-muted-foreground text-justify">
            {address?.country}, {address?.province}, {address?.city},{" "}
            {address?.district}, {address?.subDistrict},{address?.postalCode},{" "}
            {address?.detail}
          </span>
        </div>
        <MapContainer
          center={[-6.1785, 106.789]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-6.1785, 106.789]} icon={markerIcon} />
        </MapContainer>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button
          onClick={() => deleteAddress(address?._id)}
          variant={"destructive"}
        >
          Remove Address
        </Button>
        {address?.defaultAddress === false && (
          <Button
            onClick={() => setAsDefault(address?._id)}
            variant={"outline"}
          >
            Set as Default
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AddressCard;
