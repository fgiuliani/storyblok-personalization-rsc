import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const RichText = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid}>
      {blok.text}
    </div>
  );
};

export default RichText;
