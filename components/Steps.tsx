import Link from "next/link";
import React from "react";
import Compasses2LineIcon from "remixicon-react/Compasses2LineIcon";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import MagicLineIcon from "remixicon-react/MagicLineIcon";
import ToolsLineIcon from "remixicon-react/ToolsLineIcon";
import { Button } from "./ui/button";

const Steps = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 flex flex-col items-center">
              <Compasses2LineIcon
                className="text-5xl text-accent-custom1"
                size={40}
              />
              <h3 className="mb-5">Project Planning</h3>
              <p className="mb-5 max-w-md mx-auto text-center">
                {
                  "There are many variations of the passages of lorem Ipsum from available, majority."
                }
              </p>
              <Link href="/" className="flex items-center gap-2 font-medium">
                {"Read more"}
                <ArrowRightLineIcon className="text-accent-custom1" />
              </Link>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 flex flex-col items-center">
              <MagicLineIcon
                className="text-5xl text-accent-custom1"
                size={40}
              />
              <h3 className="mb-5">Gaining Materials</h3>
              <p className="mb-5 max-w-md mx-auto text-center">
                {
                  "There are many variations of the passages of lorem Ipsum from available, majority."
                }
              </p>
              <Link href="/" className="flex items-center gap-2 font-medium">
                {"Read more"}
                <ArrowRightLineIcon className="text-accent-custom1" />
              </Link>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 flex flex-col items-center">
              <ToolsLineIcon
                className="text-5xl text-accent-custom1"
                size={40}
              />
              <h3 className="mb-5">Project Execution</h3>
              <p className="mb-5 max-w-md mx-auto text-center">
                {
                  "There are many variations of the passages of lorem Ipsum from available, majority."
                }
              </p>
              <Link href="/" className="flex items-center gap-2 font-medium">
                {"Read more"}
                <ArrowRightLineIcon className="text-accent-custom1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
