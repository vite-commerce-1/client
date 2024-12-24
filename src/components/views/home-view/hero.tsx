import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/carousel";

const linkImages = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/previews/008/247/816/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-search-vector.jpg",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      <Carousel>
        <CarouselContent>
          {linkImages.map((image, index) => (
            <CarouselItem key={index} className="h-[70vh] select-none">
              <img
                src={image.image}
                alt="banner"
                className="w-full h-full object-cover object-center"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
