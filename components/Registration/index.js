import Hero from "../Hero";
import Section from "../Section";

export default function Registration() {
  return (
    <Section anchor="register" contrast="black register">
      <img className="register_icon " src="/img/icon/kc-brandmark.svg" />
           <div className="w-full">
            <h2 className="display_alt  text-center">REGISTER NOW</h2>
            <div className="head_underline "></div>
<form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        <div className="grid grid-cols-1 gap-3">
          <label className="block">
            <span className="text-gray-700 sr-only">First Name </span>
            <input
              type="text"
              className="form-input appearance-none mt-1 block w-full"
              placeholder="FIRST NAME"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 sr-only">Last Name</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="LAST NAME"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 sr-only">Email</span>
            <input
              type="email"
              className="form-input mt-1 block w-full"
              placeholder="EMAIL ADDRESS"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 sr-only">Phone Number</span>
            <input
              type="tel"
              className="form-input mt-1 block w-full"
              placeholder="PHONE NUMBER"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 sr-only">Postal Code</span>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="POSTAL CODE"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-3">
         
        <label className="block">
            <span className="text-gray-700 sr-only">First Name </span>
            <select className="form-select block w-full overflow-x-hidden mt-1">
              <option>HOW DID YOU HEAR ABOUT US</option>
              <option>Option 2</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700 sr-only">First Name </span>
            <select className="form-select block w-full overflow-x-hidden mt-1">
              <option>TYPE OF UNIT DESIRED</option>
              <option>Option 2</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700 sr-only">First Name </span>
            <select className="form-select block w-full overflow-x-hidden mt-1">
              <option>ARE YOU A REALTOR?</option>
              <option>Option 2</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700 sr-only">First Name </span>
            <select className="form-select block w-full overflow-x-hidden mt-1">
              <option>ARE YOU WORKING WITH A REALTOR?</option>
              <option>Option 2</option>
            </select>
          </label>

          <div>
            <label className="inline-flex items-top">
              <input
                className="form-checkbox accent-gvhGold-400 appearance-none checked:bg-blue-500 mt-1"
                type="checkbox"
              />
              <span className="ml-2 text-xs text-gvhGold-100">
                By checking this box, you agree to receive emails from Gable
                View Homes, its affiliates and agents, with pricing, floor
                plans, and site updates.
              </span>
            </label>
          </div>
        </div>

      </div>

      <div className="formActions">
      <input type="submit" className="cta" value="REGISTER"></input>

      </div>

      </form>

      <div className="text-xs mt-10 text-center text-gvhGold-100 md:w-4/5 mx-auto font-sans">
      The developer reserves the right to modify or make substitutes to the building design, specifications and floorplans should they be necessary. Renderings, views, and layouts are for illustration purposes only. E.&O.E.
      </div>
      </div>
    </Section>
  );
}
