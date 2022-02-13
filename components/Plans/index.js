import { Fragment, useRef, useState, useEffect } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const solutions = [
  {
    type: "A",
    typeSvg: "KC-Site-FloorPlan-Modal-TransparentBG-A.svg",
    bed: "1 BED + DEN",
    bath: "1 BATH",
    indoor: "606 sqft.",
    outdoor: "606 sqft.",
    total: "606 sqft.",
    blackline:"KC-Site-FloorPlan-Modal-TransparentBG-A.png",
    download:"",
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
  {
    type: "B",
    typeSvg: "KC-Site-FloorPlan-Modal-TransparentBG-A.svg",
    bed: "1 BED + DEN",
    bath: "1 BATH",
    indoor: "606 sqft.",
    outdoor: "606 sqft.",
    total: "606 sqft.",
    blackline:"KC-Site-FloorPlan-Modal-TransparentBG-A.png",
    download:"",
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
  {
    type: "C",
    typeSvg: "KC-Site-FloorPlan-Modal-TransparentBG-A.svg",
    bed: "1 BED + DEN",
    bath: "1 BATH",
    indoor: "606 sqft.",
    outdoor: "606 sqft.",
    total: "606 sqft.",
    blackline:"KC-Site-FloorPlan-Modal-TransparentBG-A.png",
    download:"",
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
  {
    type: "D",
    typeSvg: "KC-Site-FloorPlan-Modal-TransparentBG-A.svg",
    bed: "1 BED + DEN",
    bath: "1 BATH",
    indoor: "606 sqft.",
    outdoor: "606 sqft.",
    total: "606 sqft.",
    blackline:"KC-Site-FloorPlan-Modal-TransparentBG-A.png",
    download:"",
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
  {
    type: "E",
    typeSvg: "KC-Site-FloorPlan-Modal-TransparentBG-A.svg",
    bed: "1 BED + DEN",
    bath: "1 BATH",
    indoor: "606 sqft.",
    outdoor: "606 sqft.",
    total: "606 sqft.",
    blackline:"KC-Site-FloorPlan-Modal-TransparentBG-A.png",
    download:"",
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
]

export default function FlyoutMenu() {
  // make accordions close when one is opened.
  const AccordionRefs = useRef([]) // store accordion buttons as Refs
  const [currentAccordion, setCurrentAccordion] = useState(0) // set the current
  function closeCurrent(e) {
    const button = e.target.closest("button") // get the button
    const buttonParent = button.parentElement.parentElement // get the buttons parent (<dt> tag here)
    const parent = buttonParent.parentElement // get the buttons parent parent (Disclosure as div here)
    const index = Array.prototype.indexOf.call(parent.children, buttonParent) // find the index of the button in container
    console.log("index", index)
    for (let i = 0; i < AccordionRefs.current.length; i++) {
      // loop throug
      if (
        AccordionRefs.current[i].querySelector("button") &&
        AccordionRefs.current[i]
          .querySelector("button")
          .getAttribute("aria-expanded") === "true" &&
        currentAccordion !== index // if it is opened and not the current
      ) {
        AccordionRefs.current[i].querySelector("button").click() // then trigger a click to close it.
      }
    }
    setCurrentAccordion(index) // and set the current
  }
  return (
    <div className="">
      <div className=" mx-auto max-w-7xl  ">
        <div className="divide-y-2 divide-gvhGold-400 ">
          <div className="flex ">
            <p className="flex-auto w-16 text-center">TYPE</p>
            <p className="flex-auto w-16 text-center">BEDS</p>
            <p className="flex-auto w-16 text-center">SIZE</p>
            <span className="flex  menuItems-center mr-10">
              <ChevronDownIcon className=" text-transparent w-5 h-5 " />
            </span>
          </div>

          <dl className="mt-6  divide-y divide-gray-200 ">
            {solutions.map((solution, index) => {
              return (
                <Disclosure as="div" className="  ">
                  {({ open }) => (
                    <>
                      <dt
                        onClick={closeCurrent}
                        ref={(el) => (AccordionRefs.current[index] = el)}
                      >
                        <Disclosure.Button className={`${ open ? "bg-gvhBlue-400 text-gray-400" : "" } fp-button transition ease-in-out flex hover:bg-gvhBlue-400 items-center w-full h-[80px] text-gvhBlue-400 focus:outline-none`} >
                          <span className={`${ open ? "text-gvhGold-400" : "" } flex-auto w-16 text-center`}
>                              {solution.type}
                          </span>
                          <span  className={`${ open ? "text-gvhGold-400" : "" } flex-auto w-16 text-center`}
>                              {solution.bed}
                          </span>
                          <span  className={`${ open ? "text-gvhGold-400" : "" } flex-auto w-16 text-center`}
>                              {solution.total}
                          </span>
                          <span className="flex menuItems-center mr-10">
                 

<svg viewBox="0 0 15 15" fill="none"    className={`${ open ? "transform rotate-180" : "" } w-5 h-5 text-green-eco`} xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M14 5l-6.5 7L1 5" stroke="currentColor" stroke-linecap="square"></path></svg>
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2">
                        <div className="w-full ">
   
        <div class="flex flex-col xl:flex-row pt-10">
         
          <div class="flex-none flex-col xl:w-[300px] flex  ">
           
         

          <div class="grid  xl:grid-cols-1 gap-x-4 gap-y-2 md:gap-x-12 w-full ">

            <div className="logo md:row-span-2 col-span-3 sm:col-span-2 xl:row-span-1  xl:col-span-4">
              <img
                className="lg:pr-0"
                src="/img/icon/KC-Site-FloorPlan-Modal-TransparentBG-A.svg"
              />
              <hr className="hidden h-[2px] border-t-[2px] border-gray-900 mb-10 mt-8"></hr>
            </div>
             
            <hr className=" md:hidden lg:hidden xl:block col-span-6 mt-3 h-[2px] border-t-[1px] border-gray-400 "></hr>

              <div className="floorplan_meta col-span-4 xl:col-span-6 xl:mt-2">
                <span className="display_h3 block text-gray-900">1 BED + DEN</span>
                <span className="display_h3 block text-gray-900">1 BATH</span>
              </div>


            
              <div className="col-span-6 md:col-span-4 lg:col-span-1 xl:col-span-6  ">
                <dl>
                  <div className=" grid grid-cols-2 gap-4 ">
                    <dt className="text-sm font-medium text-gray-900">
                      Indoor living
                    </dt>
                    <dd className=" text-sm text-gray-500 mt-0  text-left md:text-right">
                      606 sqft.
                    </dd>
                  </div>

                  <div className=" grid grid-cols-2 gap-4 ">
                    <dt className="text-sm font-medium text-gray-900">
                      Outdoor living
                    </dt>
                    <dd className=" text-sm text-gray-500 mt-0 text-left md:text-right">
                      51 sqft.
                    </dd>
                  </div>
                  <div className=" grid grid-cols-2 gap-4 ">
                    <dt className="text-sm font-medium text-gray-900">Total</dt>
                    <dd className=" text-sm text-gray-500 sm:mt-0 text-left md:text-right">
                      657 sqft.
                    </dd>
                  </div>
                </dl>

              </div>

              <hr className="col-span-6 lg:block h-[2px] border-t-[1px] border-gray-400 "></hr>

              <Link href="/">
                  <a className="floorplan_meta cta hidden xl:block">DOWNLOAD</a>
                </Link>
              </div>


          </div>

          <hr className=" hidden  lg:hidden h-[2px] border-t-[2px] border-gray-900 mb-10 mt-8"></hr>
         
          <div class="flex-1 mt-10 xl:mt-0 ">
            <img
              src="/img/floorplans/KC-Site-FloorPlan-Modal-TransparentBG-A.png"
              width="400"
              className="xl:pl-20 pb-10 w-full"
            />
            <p className="disclaimer xl:pl-20 text-center pb-20 mx-auto w-4/5">
            Actual useable floor space varies from stated floor area. All furniture is for illustrative purpose only and not included in the suite. All dimensions are approximate. Sizes and specifications are subject to change without notice. E. & O. E. 
            </p>
            
          </div>

        </div>
   



                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}





