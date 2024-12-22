import Container from "@/components/atoms/container";
import { Separator } from "@/components/atoms/separator";
import BreadcrumbDetailProduct from "@/components/organisme/detail-product/breadcrumb-detail-product";
import DrawerDetailProduct from "@/components/organisme/detail-product/drawer-detail-product";
import ImageSliderProduct from "@/components/organisme/detail-product/image-slider-product";
import RelatedProductSlider from "@/components/organisme/detail-product/related-product-slider";
import SelectVariantProduct from "@/components/organisme/detail-product/select-variant-product";
import { formatCurrency } from "@/lib/format-currency";
import { useProduct } from "@/services/api/product/use-product";
import { useProducts } from "@/services/api/product/use-products";
import { IProductType } from "@/services/interfaces/product-interface";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();

  const { data: product } = useProduct(id!);
  const { data: productsData } = useProducts();
  const products = productsData?.products;

  return (
    <div className="pt-20">
      <Container className="space-y-4">
        {/* Breadcrumb */}
        <BreadcrumbDetailProduct name={product?.name} />
        <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_auto_1fr]">
          
          {/* Image Slider */}
          <ImageSliderProduct product={product!} />

          {/* Product Price */}
          <h1 className="mt-4 md:mt-0 text-2xl md:text-3xl font-bebas tracking-wide">
            {formatCurrency(product?.price)}
          </h1>

          {/* Product Name */}
          <p className="mt-2 text-base md:text-lg  font-medium md:font-semibold">
            {product?.name}
          </p>

          <Separator className="my-4 md:hidden" />

          {/* Product Description include drawer for detail product */}
          <div className="mb-4 md:mt-4">
            <p className="line-clamp-3 text-sm">{product?.description}</p>
            <DrawerDetailProduct product={product!}>
              <p className="text-sm underline text-main mt-2">
                Baca Selengkapnya
              </p>
            </DrawerDetailProduct>
          </div>

          {/* Select Variants */}
          <div className="grid grid-cols-2">
            {product?.type.map((type: IProductType) => (
              <SelectVariantProduct type={type} />
            ))}
          </div>

          {/* Todo Related Product */}
          {products && <RelatedProductSlider products={products} />}
        </main>
      </Container>
    </div>
  );
};

export default DetailProductPage;
