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
      className="hero relative flex items-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 55.28%), url(${image})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
    >

      <div className="container mx-auto ">
        <div className="bgText">{props.children}</div>
					{/* <button className="button button--fenrir">
						<svg aria-hidden="true" className="progress"  viewbox="0 0 70 70">
							<path className="progress__circle" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
							<path className="progress__path" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" pathLength="1" />
						</svg>
						<span>Go</span>
					</button> */}

{/* <div className="cta-maker  bottom-0 mx-auto left-0 right-0"> */}

    {/* </div> */}



      </div>

<div className="absolute w-[180px] bottom-0 translate-y-12 left-0 mx-auto right-0">

<a className="" href="#overview">
       <svg className="scrollmore  link"   x="0px" y="0px" width="180px" height="180px" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill="transparent" stroke="#B89D67" stroke-width="1"></circle>
      <circle className="another-circle" transform="rotate(-90 40 40)" cx="40" cy="40" r="36" fill="transparent" stroke="#B89D67" stroke-width="1"></circle>

    </svg>
    </a>

    <svg className="absolute animate-bounce  bottom-0 left-0 right-0 m-auto top-0 h-[24px]" width="24" height="29" viewBox="0 0 24 29" fill="none">
<path d="M10.9393 28.0607C11.5251 28.6464 12.4749 28.6464 13.0607 28.0607L22.6066 18.5147C23.1924 17.9289 23.1924 16.9792 22.6066 16.3934C22.0208 15.8076 21.0711 15.8076 20.4853 16.3934L12 24.8787L3.51472 16.3934C2.92893 15.8076 1.97919 15.8076 1.3934 16.3934C0.807613 16.9792 0.807613 17.9289 1.3934 18.5147L10.9393 28.0607ZM10.5 6.55671e-08L10.5 27L13.5 27L13.5 -6.55671e-08L10.5 6.55671e-08Z" fill="white"/>
</svg>

</div>


    </section>
  );
}




