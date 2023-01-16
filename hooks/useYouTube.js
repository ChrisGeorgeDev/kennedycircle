import { useEffect } from "react";

export const useYoutube = () => {
  useEffect(() => {
    const iframes = document.querySelectorAll("iframe[src*='youtube.com']");

    const pauseAllVideos = () => {
      iframes.forEach((iframe) => {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      });
    };

    return () => {
      pauseAllVideos();
    };
  }, []);
};