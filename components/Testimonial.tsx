"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonialData = [
  {
    image: "/testimonial/01.png",
    name: "Nattasha Mith",
    address: "Greenville, USA",
    review:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    image: "/testimonial/02.png",
    name: "Jessica White",
    address: "Oak Ridge, USA",
    review:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    image: "/testimonial/03.png",
    name: "Mike Davis",
    address: "Berlin, Germany",
    review:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    image: "/testimonial/04.png",
    name: "Olivia Wilson",
    address: "Blue Ridge, France",
    review:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
];

const Testimonial = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto bg-accent-custom2 rounded-[70px] py-8">
        <h2 className="text-center p-4">What clients say</h2>
        <Carousel
          className="max-w-[270px] md:max-w-2xl lg:max-w-6xl mx-auto py-4"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {testimonialData.map((data, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square flex-col items-center gap-4 justify-center p-6 ">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                          <Image
                            src={data.image}
                            width={77}
                            height={77}
                            alt=""
                          />
                          <div>
                            <h3>{data.name}</h3>
                            <div>{data.address}</div>
                          </div>
                        </div>
                        <p className="text-center">{data.review}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
