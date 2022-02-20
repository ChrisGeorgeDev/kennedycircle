import Hero from "../Hero";
import Section from "../Section";

export default function Registration() {
  return (
    <Section anchor="register" contrast="black register">
      <img className="register_icon  " src="/img/icon/kc-brandmark.svg" />
      <div className="w-full">
        <h2 className="display_alt  text-center">PHASE 1 SOLD  OUT</h2>
        <p className="display_alt  text-center">REGISTER FOR FINAL&nbsp;RELEASE</p>

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
                  <option value="Google Search">Google Search</option>
                  <option value="Buzz Buzz Homes">Buzz Buzz Homes</option>
                  <option value="A-Frame">A-Frame</option>
                  <option value="Magazine/Newspaper">Magazine/Newspaper</option>
                  <option value="Signage">Signage</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Gableviewhomes.com">Gableviewhomes.com</option>
                  <option value="E-Blast">E-Blast</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700 sr-only">First Name </span>
                <select className="form-select block w-full overflow-x-hidden mt-1">
                  <option>TYPE OF UNIT DESIRED</option>
                  <option value="One Bedroom">One Bedroom</option>
                  <option value="One Bedroom plus Den">
                    One Bedroom plus Den
                  </option>
                  <option value="Two Bedroom">Two Bedroom</option>
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700 sr-only">First Name </span>
                <select className="form-select block w-full overflow-x-hidden mt-1">
                  <option>ARE YOU A REALTOR?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700 sr-only">First Name </span>
                <select className="form-select block w-full overflow-x-hidden mt-1">
                  <option>ARE YOU WORKING WITH A REALTOR?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>

              <div>
                <label className="inline-flex items-top">
                  <input
                    className="form-checkbox accent-gvhGold-400 appearance-none checked:hover:bg-gvhGold-400  mt-1"
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

        <div className="max-w-[500px] mt-20">
          <h2 className="display_h3 mb-2">
            {" "}
            Book your virtual <br></br>appointment.
          </h2>
          <div className="text-slate-600">
            <p className="text-gvhGold-100 md:text-xl">Contact Sales</p>
            <span className="text-gvhGold-100 md:text-xl">905.336.8953</span>{" "}
            <br />
            <span className="text-gvhGold-100 md:text-xl">
              sales@gableviewhomes.com
            </span>
          </div>
        </div>
        <div className="text-xs mt-32 text-center text-slate-400 md:w-4/5 mx-auto font-sans">
          The developer reserves the right to modify or make substitutes to the
          building design, specifications and floorplans should they be
          necessary. Renderings, views, and layouts are for illustration
          purposes only. E.&O.E.
        </div>
      </div>
    </Section>
  );
}
