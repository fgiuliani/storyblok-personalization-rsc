import Storyblok, { useStoryblok } from "../utils/storyblok";
import DynamicComponent from "../components/DynamicComponent";

export default function Home({ story }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode

  story = useStoryblok(story, enableBridge);

  return <DynamicComponent blok={story.content} />;
}

export async function getServerSideProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or "published"
  };

  try {
    let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      story: data ? data.story : null,
    },
    revalidate: 3600, // revalidate every hour
  };
}
