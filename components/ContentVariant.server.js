import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const ContentVariant = ({ blok }) => (
  <div {...sbEditable(blok)} key={blok._uid}>
    {blok.content
      ? blok.content.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </div>
);

export default ContentVariant;
