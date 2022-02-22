import Hero from "../Hero";
import Section from "../Section";

export default function Registration() {
  return (
    <Section anchor="register" contrast="black register">
      <img className="register_icon  " src="/img/icon/kc-brandmark.svg" />
      <div className="w-full">
        <h2 className="display_alt  text-center mb-6">PHASE 1 SOLD&nbsp;OUT</h2>
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
                    className="form-checkbox accent-gvhGold-400  appearance-none  mt-1"
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

          <div className="formActions ">
            <input type="submit" className="fplan-cta mx-auto" value="REGISTER"></input>
          </div>
        </form>

        <div className="max-w-[500px] mt-20">
          <h2 className="display_h3 mb-2">
            {" "}
            Book your virtual <br></br>appointment.
          </h2>
          <div className="text-slate-600 mt-5">
         
            <p className="text-gvhGold-100 md:text-lg flex items-center  mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 h-5 w-5 icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="#FFF" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
</svg>
              905.336.8953</p>
          
            <p className="text-gvhGold-100 flex items-center md:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 h-6 w-6 icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#192128" fill="white" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <rect x="3" y="5" width="18" height="14" rx="2"></rect>
   <polyline points="3 7 12 13 21 7"></polyline>
</svg>
              sales@gableviewhomes.com
            </p>
          </div>
        </div>
        <div className="text-xs mt-32 text-center text-[#C4AB7A] md:w-4/5 mx-auto font-sans">
          The developer reserves the right to modify or make substitutes to the
          building design, specifications and floorplans should they be
          necessary. Renderings, views, and layouts are for illustration
          purposes only. E.&O.E.
        </div>
      </div>
    </Section>
  );
}
