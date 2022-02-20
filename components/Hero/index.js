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
      className="hero flex items-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 55.28%), url(${image})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
    >

      <div className="container mx-auto ">
        <div className="bgText">{props.children}</div>
      </div>
    </section>
  );
}




