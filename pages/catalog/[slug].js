import Storyblok from "../../utils/storyblok";
import Catalog from "../../components/Catalog.server";

export default function CatalogPage({ props }) {
  return <Catalog products={props.products} />;
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let sbParams = {
    version: "draft", // or "published"
  };

  let { data } = await Storyblok.get(
    `cdn/stories?starts_with=products/&${slug}`,
    sbParams
  );

  return {
    props: {
      products: data ? data.stories : false,
    },
  };
}
