import { Fragment, useRef, useState, useEffect } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const solutions = [
  {
    name: "Blog",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn about tips, product updates and company culture.",
    href: "#"
  },
  {
    name: "Help Center",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Get all of your questions answered in our forums of contact support.",
    href: "#"
  },
  {
    name: "Guides",
    description:
      "Mollit eu laboris ullamco eiusmod sit ad aliquip quis. Duis mollit irure sint dolor adipisicing. Ullamco do eiusmod duis eu nulla sint. Proident amet excepteur laborum deserunt sunt Lorem ex elit ut ut qui qui laboris velit minim. Ex amet do anim do in consequat aliquip elit aute proident. Anim culpa veniam eu consectetur dolor velit nostrud laboris. Exercitation non ad excepteur et deserunt reprehenderit exercitation quis labore veniam labore non velit. Est proident exercitation ex non laborum cillum commodo non dolore eu ad. Occaecat enim elit non exercitation fugiat ipsum officia proident officia ex minim consectetur. Pariatur in aute irure consectetur sit culpa eiusmod dolore Lorem.Learn how to maximize our platform to get the most out of it.",
    href: "#"
  },
  {
    name: "Events",
    description:
      "Check out webinars with experts and learn about our annual conference.",
    href: "#"
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#"
  }
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
    <div className="bg-bg-gray">
      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="divide-y-2 divide-gray-200 ">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 ">Heading</h2>
            <h3 className="text-lg text-gray-600 ">Description</h3>
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 ">
            {solutions.map((solution, index) => {
              return (
                <Disclosure as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt
                        onClick={closeCurrent}
                        ref={(el) => (AccordionRefs.current[index] = el)}
                      >
                        <Disclosure.Button className="flex justify-between w-full text-left text-gray-400 focus:outline-none">
                          <span className="w-full font-medium text-gray-900">
                            {solution.name}
                          </span>
                          <span className="flex mt-4 ml-6 menuItems-center h-7">
                            <ChevronDownIcon className="h-6 w-6 transform" />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2">
                        <div className="w-full text-base text-gray-500">
                          {solution.description}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
