import Image from "next/image";
import React from "react";

const brandsData = [
  {
    image: "/brands/01.svg",
  },
  {
    image: "/brands/02.svg",
  },
  {
    image: "/brands/03.svg",
  },
  {
    image: "/brands/04.svg",
  },
  {
    image: "/brands/05.svg",
  },
];

const Brands = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {brandsData.map((data, index) => {
            return (
              <div key={index}>
                <Image src={data.image} width={100} height={100} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
