import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Hero(props) {
  let isDesktop = useMediaQuery("(min-width: 800px)");
  let image = props.image;
  let portraitImage = props.imagePortrait;

  {
    isDesktop && (image = props.image);
  }

  {
    !isDesktop && (image = props.imagePortrait);
  }

  return (
    <section
      className="h-screen"
      style={{ backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), url(${image})`, backgroundSize: "cover" }}
    >

      <div className="container mx-auto ">
        <div className="bgText">{props.children}</div>
      </div>
    </section>
  );
}




