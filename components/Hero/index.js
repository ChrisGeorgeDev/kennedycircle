import Image from 'next/image'
import { useMediaQuery } from "../../hooks/useMediaQuery";



export default function Hero(props) {
    let isDesktop = useMediaQuery("(min-width: 800px)");
    let portraitImage = props.imagePortrait;
    return (
   
 <section className=' h-screen '>
 <div className="bgWrap">
 {isDesktop && (
   <Image
   alt={props.alt}
   src={props.image}
   layout="fill"
   objectFit="cover"
   quality={75}
 />
        )}

        {!isDesktop && (

<Image
alt="Mountains"
src="/img/SuiteD-KitchenUpgrade.png"
layout="fill"
objectFit="cover"
quality={100}
/>
          

        )}

   
 </div>
 <div className="container mx-auto ">

 <div className="bgText" >

   {props.children}

 </div>


 </div>
</section>
    
    )
}

