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
      key={props.id}
      className="youtube-frame rounded-lg overflow-hidden  relative bg-black position-relative"
    >
    <div className="absolute bg-black opacity-40 top-0 right-0 left-0 bottom-0"></div>

      <span
        onClick={onClick}
        className=" absolute group flex items-center shadow-2xl justify-center bg-gvhGold-100 rounded-full left-0 right-0 top-0 bottom-0 mx-auto my-auto  w-24 h-16 hover:scale-[105%] transition-all ease-in-out duration-200 display-1 text-gvhBlue-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8  shadow-2xl group-hover:fill-[#222] transition-all ease-in-out">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
</svg>

      
      
      </span>
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
