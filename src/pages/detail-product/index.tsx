import DetailProductView from "@/components/views/detail-product-view";
import { Helmet } from "react-helmet-async";

const DetailProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Detail Product | E-Commerce</title>
        <meta name="description" content={"No description available"} />
        <meta name="image" content={"default-image.jpg"} />
      </Helmet>
      <DetailProductView />
    </>
  );
};

export default DetailProductPage;
