import Section from "../Section";


export default function Floorplans(props) {
 
  
    return (
        <Section anchor="floorplans" contrast="dark">

  
        <div className="container mx-auto ">
        <h2 className="display_alt  ">FLOORPLANS</h2>

          <div className="bgText">{props.children}</div>
        </div>
      </Section>
    );
  }
  
  
  
  
  