import { z } from "zod";
import { axiosWithConfig } from "../axios-with-config";
import { useMutation } from "@tanstack/react-query";
import { IAddressResponse } from "@/services/interfaces/address-interface";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export const createAddressSchema = z.object({
  detail: z.string().nonempty("Detail address is required"), // Detail alamat harus diisi
  subDistrict: z.string().nonempty("Sub-district is required"), // Kelurahan harus diisi
  district: z.string().nonempty("District is required"), // Kecamatan harus diisi
  city: z.string().nonempty("City is required"), // Kota harus diisi
  province: z.string().nonempty("Province is required"), // Provinsi harus diisi
  country: z.string().default("Indonesia"), // Negara opsional, default: Indonesia
  postalCode: z.string().regex(/^\d{5}$/, "Postal code must be 5 digits"), // Kode pos harus 5 digit
  coordinates: z.object({
    latitude: z
      .number()
      .min(-90, "Latitude must be between -90 and 90")
      .max(90, "Latitude must be between -90 and 90"),
    longitude: z
      .number()
      .min(-180, "Longitude must be between -180 and 180")
      .max(180, "Longitude must be between -180 and 180"),
  }),
});

const addAddress = async (data: z.infer<typeof createAddressSchema>) => {
  const response = await axiosWithConfig.post<IAddressResponse>(
    "/address",
    data
  );
  return response.data.data;
};

export const useAddAddress = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: addAddress,
    mutationKey: ["add-address"],
    onSuccess: () => {
      toast({
        description: "Add address success",
      });
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        alert("Unauthorized");
        navigate("/login");
      } else if (error instanceof AxiosError && error.response) {
        toast({
          description: error.response.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    },
  });
};
