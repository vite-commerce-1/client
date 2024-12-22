import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { IAddressResponse } from "@/services/interfaces/address-interface";

export const createAddressSchema = z.object({
  detail: z.string().nonempty("Detail address is required"), // Detail alamat harus diisi
  subDistrict: z.string().nonempty("Sub-district is required"), // Kelurahan harus diisi
  district: z.string().nonempty("District is required"), // Kecamatan harus diisi
  city: z.string().nonempty("City is required"), // Kota harus diisi
  province: z.string().nonempty("Province is required"), // Provinsi harus diisi
  country: z.string().default("Indonesia"), // Negara opsional, default: Indonesia
  postalCode: z.string().regex(/^\d{5}$/, "Postal code must be 5 digits"), // Kode pos harus 5 digit
  coordinates: z.tuple([
    z
      .number()
      .min(-180, "Longitude must be between -180 and 180")
      .max(1000, "Longitude must be between -180 and 180"), // Longitude
    z
      .number()
      .min(-90, "Latitude must be between -90 and 90")
      .max(90, "Latitude must be between -90 and 90"), // Latitude
  ]),
});

const addAddress = async (data: z.infer<typeof createAddressSchema>) => {
  const response = await axiosWithConfig.post<IAddressResponse>(
    "/address",
    data
  );
  return response.data.data;
};

export const useAddAddress = () => {
  return useMutation({
    mutationFn: addAddress,
    mutationKey: ["add-address"],
    onSuccess: () => {},
    onError: () => {},
  });
};
