import Storyblok, { useStoryblok } from "../utils/storyblok";
import DynamicComponent from "../components/DynamicComponent";

export default function Home() {
  const enableBridge = true;
  const story = getStory();

  story = useStoryblok(story, enableBridge);

  return <DynamicComponent blok={story.content} />;
}

function getStory() {
  Storyblok.get("cdn/stories/home")
    .then(({ data }) => {
      return data.story;
    })
    .catch((error) => {
      return null;
    });
}
