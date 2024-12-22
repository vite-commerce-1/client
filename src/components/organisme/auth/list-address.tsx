import { Badge } from "@/components/atoms/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { useAddress } from "@/services/api/auth/use-address";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ScrollArea } from "@/components/atoms/scroll-area";
const ListAddress = () => {
  const { data: addresses } = useAddress();

  return (
    <div>
      <ScrollArea className="h-[90vh]">
        {addresses?.map((address) => (
          <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="capitalize">{address?.detail}</CardTitle>
              {address?.defaultAddress && (
                <Badge>
                  {address?.defaultAddress ? "Default" : "Not Default"}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">Country : </span>
                <span className="text-muted-foreground">{address.country}</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">Province : </span>
                <span className="text-muted-foreground">
                  {address.province}
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">City : </span>
                <span className="text-muted-foreground">{address.city}</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">District : </span>
                <span className="text-muted-foreground">
                  {address.district}
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">Sub District : </span>
                <span className="text-muted-foreground">
                  {address.subDistrict}
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="font-medium">Postal Code : </span>
                <span className="text-muted-foreground">
                  {address.postalCode}
                </span>
              </div>
              <div className="w-full flex items-start justify-between gap-x-3">
                <span className="font-medium text-nowrap">Detail : </span>
                <span className="text-muted-foreground">
                  {address.country}, {address.province}, {address.city},{" "}
                  {address.district}, {address.subDistrict},{address.postalCode}
                  , {address.detail}
                </span>
              </div>
              <div className="w-full flex items-center justify-between">
                <MapContainer
                  center={[-6.1785, 106.789]}
                  zoom={13}
                  style={{ height: "400px", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      address?.coordinates[0],
                      address?.coordinates[1],
                    ]}
                  >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ListAddress;
