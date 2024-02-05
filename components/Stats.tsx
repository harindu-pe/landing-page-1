import React from "react";

const Stats = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20 bg-accent-custom2 py-[80px] xl:py-[150px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="text-center xl:border-r xl:border-accent-custom1">
            <h1 className="text-accent-custom1">12</h1>
            <p>Years Of Experience</p>
          </div>
          <div className="text-center xl:border-r xl:border-accent-custom1">
            <h1 className="text-accent-custom1">85</h1>
            <p>Projects Completed</p>
          </div>
          <div className="text-center xl:border-r xl:border-accent-custom1">
            <h1 className="text-accent-custom1">50</h1>
            <p>Active Projects</p>
          </div>
          <div className="text-center xl:border-r xl:border-accent-custom1">
            <h1 className="text-accent-custom1">97</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
