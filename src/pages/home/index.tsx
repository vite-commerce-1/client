import HomeView from "@/components/views/home-view";
import { memo } from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | E-commerce</title>
        <meta name="description" content="Welcome to our e-commerce website!" />
      </Helmet>
      <HomeView />
    </>
  );
};

export default memo(HomePage);
