import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";
import Container from "@/components/atoms/container";
import { Separator } from "@/components/atoms/separator";
import ProductDescription from "@/components/views/detail-product-view/product-description";
import ProductName from "@/components/views/detail-product-view/product-name";
import ProductOptionVariant from "@/components/views/detail-product-view/product-option-variant";
import ProductPrice from "@/components/views/detail-product-view/product-price";
import DrawerDetailProduct from "@/components/organisme/detail-product/drawer-detail-product";
import ImageSliderProduct from "@/components/organisme/detail-product/image-slider-product";
import RelatedProductSlider from "@/components/organisme/detail-product/related-product-slider";
import { useProduct } from "@/features/product/use-product";
import { useProducts } from "@/features/product/use-products";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();

  const { data: product } = useProduct(id!);

  const { data: productsData } = useProducts();
  const products = productsData?.products;

  const filteredProduct = products?.filter((product) => product._id !== id);

  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto] pt-20">
        <Breadcrumb className="md:col-span-2 col-start-1 row-start-1 py-4">
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-xs sm:text-sm">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products" className="text-xs sm:text-sm">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="line-clamp-1">
              <BreadcrumbPage className="text-xs sm:text-sm text-nowrap">
                {product?.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <ImageSliderProduct
          product={product}
          className="md:col-start-1 md:row-span-5"
        />

        <ProductPrice
          price={product?.price}
          size={"xl"}
          className="mt-4 md:mt-0 md:col-start-2 md:row-start-2"
        />

        <ProductName
          name={product?.name}
          className="md:col-start-2 md:row-start-3"
          size={"sm"}
        />

        <Separator className="my-4 md:hidden" />

        <div className="mb-4 md:mt-4 md:col-start-2 md:row-start-4">
          <ProductDescription size={"xs"}>
            {product?.description}
          </ProductDescription>
          <DrawerDetailProduct product={product!}>
            <p className="text-sm underline text-main mt-2">
              Baca Selengkapnya
            </p>
          </DrawerDetailProduct>
        </div>

        <ProductOptionVariant
          className="md:col-start-2 md:row-start-5"
          type={product?.type}
        />
      </Container>
      <Container>
        <RelatedProductSlider products={filteredProduct!} />
      </Container>
    </div>
  );
};

export default DetailProductView;
