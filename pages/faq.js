import { useRef } from "react";
import Section from "../components/Section";
import { NextSeo } from "next-seo";
import { Disclosure, Transition } from "@headlessui/react";
import { TextWrap } from "../components/Animations/PageContent";

const faqItems = [
  {
    category: "Leasing & Move-In",
    question: "How soon can I move in?",
    answer:
      "Move-ins begin in phases starting Q4 2026, floor by floor. We recommend registering 2–3 months ahead of your target date so our leasing team can match you with an available suite and confirm timing.",
  },
  {
    category: "Leasing & Move-In",
    question: "Do I need a deposit to reserve a suite?",
    answer:
      "Yes — a last month's rent (LMR) deposit equal to one month's rent is required to secure your suite, in accordance with the Ontario Residential Tenancies Act. Our leasing team will confirm details and timing as your move-in date approaches.",
  },
  {
    category: "Leasing & Move-In",
    question: "What lease terms are available?",
    answer:
      "A lease agreement is a legal contract governed by the Residential Tenancies Act (RTA), signed by both tenant(s) and landlord. All residents are responsible for the full term of their tenancy. Should you need to leave early, contact the Resident Services Office for instructions on assigning your suite. To end your lease at term, a minimum of 60 days' written notice is required, with the termination date falling on the last day of your rental period.",
  },
  {
    category: "Leasing & Move-In",
    question: "How do I apply for a suite?",
    answer:
      "Submit your application online or through our leasing team, along with government-issued ID, proof of income (recent pay stubs or an employment letter), and a credit report. Once your documents are received, we'll confirm your application status promptly.",
  },
  {
    category: "Rent & Payments",
    question: "Is Kennedy Circle rent-controlled?",
    answer:
      "As a purpose-built rental building completed after 2018, Kennedy Circle is exempt from Ontario's rent increase guideline under the Residential Tenancies Act. Rent increases follow the terms of your lease agreement.",
  },
  {
    category: "Rent & Payments",
    question: "How are utilities billed?",
    answer:
      "Electricity and water are individually sub-metered through Metergy Solutions, and you'll receive a monthly bill directly from Metergy for these in addition to your rent. Gas is included in your rent.",
  },
  {
    category: "Rent & Payments",
    question: "What are my payment options?",
    answer:
      "Rent can be paid online through the resident portal, or by pre-authorized payment, debit, or certified cheque. Ask your leasing consultant for the full list of accepted methods.",
    note: "Confirm payment rails once Yardi tier/portal is finalized.",
  },
  {
    category: "Suites, Parking & Amenities",
    question: "What suite types are available?",
    answer:
      "Kennedy Circle offers 1-bedroom, 1-bedroom + den, and 2-bedroom suites, including several 2-bedroom layouts (Type C, D, and E) with starting rents from $2,550/month. Visit our Floorplans page for full layouts and pricing.",
  },
  {
    category: "Suites, Parking & Amenities",
    question: "Is parking available?",
    answer:
      "Both underground and above-ground parking are available for residents. Contact our leasing team for current availability and monthly rates for your suite type.",
  },
  {
    category: "Suites, Parking & Amenities",
    question: "What amenities are included?",
    answer:
      "Residents enjoy smart home technology in every suite, a rooftop terrace, a co-working lounge, and additional shared amenity spaces designed for everyday life. See our Amenities page for the full list.",
  },
  {
    category: "Pets & Suite Policies",
    question: "Are pets allowed?",
    answer:
      "Kennedy Circle is pet-friendly. Pets must be licensed, up to date on vaccinations, and leashed in common areas. In accordance with Ontario's breed-specific legislation, pit bulls and pit bull-mixes are not permitted.",
  },
  {
    category: "Pets & Suite Policies",
    question: "Can I make changes to my suite?",
    answer:
      "Your suite is your home — minor personalization is welcome. Electrical, plumbing, and structural modifications are not permitted, and any changes must be returned to original condition prior to move-out, per your lease and the RTA.",
  },
  {
    category: "Pets & Suite Policies",
    question: "Do I need renters insurance?",
    answer:
      "Yes. As a condition of your lease, all leaseholders are required to carry a minimum of $1,000,000 in Property Loss and Personal Liability Insurance, with Kennedy Circle named as \"additionally insured\" on the policy. Proof of coverage is required before move-in.",
  },
  {
    category: "Resident Life & Application",
    question: "How do I submit a maintenance request?",
    answer:
      "Contact our leasing office by phone or email and our team will coordinate a maintenance visit. For urgent issues affecting safety (fire, flooding, major electrical or plumbing failures), call us right away.",
  },
  {
    category: "Resident Life & Application",
    question: "Can I transfer to a different suite?",
    answer:
      "If your needs change after move-in, contact our leasing office to discuss suite transfer options based on availability.",
  },
  {
    category: "Resident Life & Application",
    question: "What happens at my move-in inspection?",
    answer:
      "When you move in, you'll walk through your suite with a member of our team to confirm everything is in order and get familiar with your new home's features. Any outstanding items will be addressed promptly.",
  },
  {
    category: "Resident Life & Application",
    question: "Do I need to set up utilities myself?",
    answer:
      "Electricity and water are sub-metered through Metergy Solutions, who will set up your utility account. Gas is included in your rent. Our leasing team will confirm what's needed from you prior to move-in.",
  },
  {
    category: "Resident Life & Application",
    question: "How do I add or remove a pet from my lease?",
    answer:
      "Notify our leasing team and we'll provide a pet addendum to add to your lease. To remove a pet, send a written request confirming the pet no longer resides at the suite.",
  },
  {
    category: "Resident Life & Application",
    question: "How do I add or remove a roommate from my lease?",
    answer:
      "Contact our leasing team. A new roommate will need to complete a rental application, provide proof of income and government-issued ID. Once approved, an updated lease will be issued and signed electronically through DocuSign.",
  },
  {
    category: "Resident Life & Application",
    question: "Is my last month's rent deposit refundable?",
    answer:
      "Your deposit is applied directly to your final month's rent when you give proper notice to vacate — it isn't a separate refund. If you leave without proper notice, standard RTA rules apply.",
  },
  {
    category: "Resident Life & Application",
    question: "Do I need a guarantor to apply?",
    answer:
      "If you don't meet our financial qualifications on your own, a guarantor (parent, guardian, or another individual not occupying the suite) can be added to your application. They'll complete the same application process and co-sign the lease. There is no separate application fee.",
  },
  {
    category: "Resident Life & Application",
    question:
      "How do I know I'm dealing with an authorized Kennedy Circle representative?",
    answer:
      "Rental fraud is common, so always verify you're speaking with an authorized Gable View Homes representative. Our team is happy to confirm their identity — don't hesitate to ask. If you suspect fraud, contact our leasing office immediately.",
  },
  {
    category: "Resident Life & Application",
    question: "How do I book a tour?",
    answer:
      "Call 289.498.3213, email leasing@gableviewhomes.com, or submit an inquiry through our website to schedule an in-person or virtual tour with our leasing team.",
  },
];

export default function Faq() {
  const itemRefs = useRef([]);

  function closeOthers(index) {
    itemRefs.current.forEach((el, i) => {
      if (i === index || !el) return;
      const button = el.querySelector("button");
      if (button && button.getAttribute("aria-expanded") === "true") {
        button.click();
      }
    });
  }

  let lastCategory = null;

  return (
    <>
      <NextSeo
        title="FAQ | Kennedy Circle Apartments | Milton, ON"
        description="Answers to common leasing, rent, suite, pet, and resident questions for Kennedy Circle Apartments in Milton, ON. Now Pre-Leasing, Call 289.498.3213"
      />

      <section className="bg-gvhBlue-400 pt-40 pb-16 md:pt-48 md:pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="display_h1_alt text-white">FAQ</h1>
          <h2 className="text-white">Frequently Asked Questions</h2>
        </div>
      </section>

      <Section anchor="faq" contrast="light">
        <TextWrap>
          <div className="max-w-[800px] mx-auto w-full">
            <div className="divide-y-2 divide-gvhGold-400">
              {faqItems.map((item, index) => {
                const showCategory = item.category !== lastCategory;
                lastCategory = item.category;

                return (
                  <div key={item.question}>
                    {showCategory && (
                      <h3
                        className={`display_h3 text-center ${
                          index === 0 ? "mb-6" : "mt-14 mb-6"
                        }`}
                      >
                        {item.category}
                      </h3>
                    )}
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <h4
                            onClick={() => closeOthers(index)}
                            ref={(el) => (itemRefs.current[index] = el)}
                          >
                            <Disclosure.Button
                              className={`${
                                open
                                  ? "bg-gvhBlue-400 text-gray-400"
                                  : "text-gvhBlue-400"
                              } hover:bg-gvhBlue-400 hover:text-gray-400 transition ease-in-out flex items-center justify-between w-full py-5 px-2 text-left focus:outline-none`}
                            >
                              <span className="text-base sm:text-lg pr-4">
                                {item.question}
                              </span>
                              <svg
                                viewBox="0 0 15 15"
                                fill="none"
                                className={`${
                                  open
                                    ? "transform text-gvhGold-400 rotate-180"
                                    : ""
                                } w-3 h-3 md:w-4 md:h-4 flex-shrink-0`}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 5l-6.5 7L1 5"
                                  stroke="currentColor"
                                  strokeLinecap="square"
                                />
                              </svg>
                            </Disclosure.Button>
                          </h4>
                          <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform -translate-y-2 opacity-0"
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Disclosure.Panel className="pb-6 px-2">
                              <p className="text-base pt-2">{item.answer}</p>
                              {item.note && (
                                <p className="text-sm italic text-gvhBlue-400/70 mt-1.5">
                                  {item.note}
                                </p>
                              )}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  </div>
                );
              })}
            </div>
          </div>
        </TextWrap>
      </Section>

      <Section anchor="contact" contrast="dark">
        <TextWrap>
          <div className="text-center">
            <h3 className="display_h3 mb-4">Have Questions?</h3>
            <p className="text-base">
              Call <a href="tel:+12894983213">289.498.3213</a> or email{" "}
              <a href="mailto:leasing@gableviewhomes.com">
                leasing@gableviewhomes.com
              </a>
            </p>
          </div>
        </TextWrap>
      </Section>
    </>
  );
}
