import { useRef } from "react";

// export type Props = {
//     video: string;
//     width: string,
//     height: string,
//     thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault'
// }

export default function YouTubeFrame(props) {
  const divRef = useRef(null)

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.classList.add("aspect-video", "w-full");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
  
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${props.video}?rel=0&showinfo=0&autoplay=1&enablejsapi=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className="youtube-frame  relative  position-relative"
    >
    

      <span
        onClick={onClick}
        className="ti-control-play position-absolute display-1 text-white"
      />
      <img
        onClick={onClick}
        loading="lazy"
        src={`https://img.youtube.com/vi/${props.video}/${props.thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        className="shadow-md"
      />
    </div>
  );
}
