import { Separator } from "@/components/atoms/separator";
import { formatCurrency } from "@/lib/format-currency";
import { useProduct } from "@/services/api/product/use-product";
import { useProducts } from "@/services/api/product/use-products";
import { IProductType } from "@/services/interfaces/product-interface";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/atoms/skeleton";
import { conditionalRender } from "@/lib/render-helper";
import React from "react";

const BreadcrumbDetailProduct = React.lazy(
  () =>
    import("@/components/organisme/detail-product/breadcrumb-detail-product")
);
const Container = React.lazy(() => import("@/components/atoms/container"));
const DrawerDetailProduct = React.lazy(
  () => import("@/components/organisme/detail-product/drawer-detail-product")
);
const ImageSliderProduct = React.lazy(
  () => import("@/components/organisme/detail-product/image-slider-product")
);
const RelatedProductSlider = React.lazy(
  () => import("@/components/organisme/detail-product/related-product-slider")
);
const SelectVariantProduct = React.lazy(
  () => import("@/components/organisme/detail-product/select-variant-product")
);

const DetailProductPage = () => {
  const { id } = useParams();

  const { data: product, isLoading: productLoading } = useProduct(id!);
  const { data: productsData } = useProducts();
  const products = productsData?.products;

  return (
    <div className="pt-20">
      <Container className="space-y-4">
        {conditionalRender(
          productLoading,
          () => (
            <>
              <Skeleton className="h-6 w-1/2" />
              <main className="grid grid-cols-1 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto_1fr] gap-3">
                <Skeleton className="w-full h-full min-h-[432px] flex col-start-1 row-span-4" />
                <Skeleton className="w-full h-full min-h-10 flex col-start-2 row-start-1" />
                <Skeleton className="w-full h-full min-h-10 flex col-start-2 row-start-2" />
                <Skeleton className="w-full h-full min-h-20 flex col-start-2 row-start-3" />
                <Skeleton className="w-full h-full flex col-start-2 row-start-4" />
              </main>
            </>
          ),
          () => (
            <>
              <BreadcrumbDetailProduct name={product?.name} />

              <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_auto_1fr]">
                <ImageSliderProduct product={product!} />

                <h1 className="mt-4 md:mt-0 text-2xl md:text-3xl font-bebas tracking-wide">
                  {formatCurrency(product?.price)}
                </h1>

                <p className="mt-2 text-base md:text-lg font-medium md:font-semibold">
                  {product?.name}
                </p>

                <Separator className="my-4 md:hidden" />

                <div className="mb-4 md:mt-4">
                  <p className="line-clamp-3 text-sm">{product?.description}</p>
                  <DrawerDetailProduct product={product!}>
                    <p className="text-sm underline text-main mt-2">
                      Baca Selengkapnya
                    </p>
                  </DrawerDetailProduct>
                </div>

                <div className="grid grid-cols-2">
                  {product?.type.map((type: IProductType) => (
                    <SelectVariantProduct key={type._id} type={type} />
                  ))}
                </div>

                {/* Todo Related Product */}
                {products && <RelatedProductSlider products={products} />}
              </main>
            </>
          )
        )}
      </Container>
    </div>
  );
};

export default DetailProductPage;
