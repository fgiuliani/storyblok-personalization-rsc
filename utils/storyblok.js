import { useEffect, useState } from "react";

const Storyblok = {
  get: async (url) => {
    const res = await fetch(
      `https://api.storyblok.com/v2/${url}?version=draft&token=AK2gOnJ2NjAyx1nhomncXwtt`
    );

    const data = await res.json();
    return { data };
  },
};

export function useStoryblok(originalStory, preview) {
  let [story, setStory] = useState(originalStory);

  function initEventListeners() {
    const { StoryblokBridge } = window;
    if (typeof StoryblokBridge !== "undefined") {
      const storyblokInstance = new StoryblokBridge({});

      storyblokInstance.on(["change", "published"], () =>
        location.reload(true)
      );

      storyblokInstance.on("input", (event) => {
        if (story && event.story._uid === story._uid) {
          setStory(event.story);
        }
      });

      storyblokInstance.on("enterEditmode", (event) => {
        Storyblok.get(`cdn/stories/${event.storyId}`)
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }

  function addBridge(callback) {
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
    if (preview) {
      addBridge(initEventListeners);
    }
  }, []);

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
}

export default Storyblok;
