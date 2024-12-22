import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import {
  createAddressSchema,
  useAddAddress,
} from "@/services/api/auth/use-add-address";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ScrollArea } from "@/components/atoms/scroll-area";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationPicker = ({
  setCoordinates,
}: {
  setCoordinates: (coords: [number, number]) => void;
}) => {
  useMapEvents({
    click(e) {
      setCoordinates([e.latlng.lng, e.latlng.lat]);
    },
  });

  return null;
};

const AddAddressForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof createAddressSchema>>({
    resolver: zodResolver(createAddressSchema),
    defaultValues: {
      country: "Indonesia",
      coordinates: [0, 0] as [number, number],
    },
  });

  const { mutate: addAddress } = useAddAddress();

  const onSubmit = async (data: z.infer<typeof createAddressSchema>) => {
    const parsedData = {
      ...data,
      coordinates: [
        Number(data.coordinates[0]),
        Number(data.coordinates[1]),
      ] as [number, number],
    };

    try {
      addAddress(parsedData);
    } catch (error) {
      console.error("Error while adding address:", error);
      console.error("Parsed Data:", parsedData);
    }
  };

  const setCoordinates = (coords: [number, number]) => {
    form.setValue("coordinates", coords);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ScrollArea className="h-[90vh]">
            <FormField
              name="country"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="province"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your province"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your city"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="district"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your district"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="subDistrict"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub District</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your sub district"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="postalCode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your sub postal code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="detail"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detail</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Detail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="coordinates"
              control={form.control}
              render={() => (
                <FormItem className="mt-4">
                  <MapContainer
                    center={[-6.1785, 106.789]}
                    zoom={13}
                    style={{ height: "400px", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                      position={[
                        form.getValues("coordinates")[1],
                        form.getValues("coordinates")[0],
                      ]}
                      icon={markerIcon}
                    />
                    <LocationPicker setCoordinates={setCoordinates} />
                  </MapContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 space-x-4 flex items-center justify-start">
              <Button variant={"secondary"} type="submit">
                Create
              </Button>
              <Button
                variant={"destructive"}
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </div>
          </ScrollArea>
        </form>
      </Form>
    </div>
  );
};

export default AddAddressForm;
