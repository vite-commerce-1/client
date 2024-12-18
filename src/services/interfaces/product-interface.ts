export interface IProductType {
  key: string; // Key untuk tipe produk, misalnya "color"
  values: string[]; // Array nilai untuk tipe produk, misalnya ["black", "lylac", "gold"]
  _id: string; // ID unik untuk tipe produk
}

interface ICategory {
  _id: string; // ID unik kategori
  name: string; // Nama kategori, misalnya "electronics"
}

export interface IProduct {
  _id: string; // ID unik produk
  name: string; // Nama produk, misalnya "Iphone 14 Pro Max 256gb"
  price: number; // Harga produk, misalnya 24999000
  image: string[]; // Array URL gambar produk
  description: string; // Deskripsi produk
  type: IProductType[]; // Array tipe produk, misalnya warna
  category: ICategory; // Informasi kategori produk
  __v: number; // Versi dokumen untuk Mongoose (biasanya digunakan untuk internal)
}

export interface IProductResponse {
  message: string; // Pesan dari response API
  data: IProduct[]; // Array produk dalam data
  pagination: {
    totalProduct: number;
    totalPages: number;
    currentPage: number;
    limit: string;
  };
}
