import React from "react";
import { Button } from "./ui/button";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const contactData = [
  {
    title: "Do you want to join Interno?",
    subtitle: "It is a long established fact will be distracted.",
  },
];

const Contact = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto bg-primary-custom rounded-[70px] py-[80px]">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            {contactData[0].title}
          </h2>
          <p className="text-white mb-8 maw-w-sm xl:max-w-none mx-auto">
            {contactData[0].subtitle}
          </p>
          <Button className="h-[50px] px-[30px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2 bg-accent-custom1 hover:bg-accent-hover mx-auto">
            Connect with us
            <ArrowRightLineIcon className="text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
