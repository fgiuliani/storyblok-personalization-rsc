import CallToAction from "./CallToAction";
import Catalog from "./Catalog.server";
import Page from "./Page";
import PersonalizedContent from "./PersonalizedContent.server";
import RichText from "./RichText";

const Components = {
  call_to_action: CallToAction,
  catalog: Catalog,
  page: Page,
  personalized_content: PersonalizedContent,
  rich_text: RichText,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
