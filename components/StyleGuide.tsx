"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  return (
    <div className="">
      {/* typography */}
      <div className="container mx-auto">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem, accusamus placeat odit ullam quas voluptates
          consectetur nulla fuga nam, aliquam voluptas quae sequi, magni enim
          necessitatibus quibusdam deserunt ea quam?
        </p>
      </div>
    </div>
  );
};

export default StyleGuide;
