import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function DividerImg(props) {
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
        className="h-[90vh] relative"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 55.28%), url(${image})`, backgroundSize: "cover", backgroundPosition: `${props.position}`}}
      >
          <p className='caption'>caption</p>
          </section>
    )
}