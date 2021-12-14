import ContentVariant from "./ContentVariant.server";
import { sbEditable } from "@storyblok/storyblok-editable";
import { Suspense } from "react";
import Cookies from "js-cookie";

const PersonalizedContent = ({ blok }) => (
  <div {...sbEditable(blok)} key={blok._uid}>
    <Suspense fallback={<h1>Loading personalized content...</h1>}>
      <PersonalizedVariants blok={blok} />
    </Suspense>
  </div>
);

function PersonalizedVariants(blok) {
  let variants = [];

  if (Cookies.get("category") && blok.variants) {
    variants = blok.variants.filter(
      (variant) => variant.user_type === Cookies.get("category")
    );
  }

  return (
    <>
      {variants
        ? variants.map((variant) => (
            <Suspense fallback={<h1>Loading content...</h1>} key={variant._uid}>
              <ContentVariant blok={variant} />
            </Suspense>
          ))
        : null}
    </>
  );
}

export default PersonalizedContent;
