import React from "react";
import Image from "next/image";
import { sbEditable } from "@storyblok/storyblok-editable";

const CallToAction = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid}>
      <div>
        <h2>{blok.headline}</h2>
        <Image src={blok.image.filename} alt={blok.image.alt} />
        <p>{blok.text}</p>
        <p>{blok.link}</p>
      </div>
    </div>
  );
};

export default CallToAction;
