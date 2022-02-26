import MailchimpForm from "../CustomForm";
import Hero from "../Hero";
import Section from "../Section";



export default function Registration() {


  function sayHello(e) {
    e.preventDefault();
    const form = document.querySelector('form');
const data = new FormData(form);
console.log(form)
    // const update = {
    //   title: document.getElementById('fname').value,
    //   body: 'Brilliant post on fetch API',
    //   userId: 1,
    //   };
      
      const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      },
      body: data,
      };


      fetch('https://nottinghilltowns.us18.list-manage.com/subscribe/post-json?u=839fb24cef0413753d27dbc3a&amp;id=f752654c15', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
    
      }).catch(e => {
      console.log(e);
      });



    // async (req, res) => {
    //   try {
    //     const response = await fetch(
    //       `https://endpoint.freshdesk.com/api/v2/tickets/28/reply`,
    //       {
    //         body: "We are working on this issue. Will keep you posted.",
    //         headers: {
    //           'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
    //           'Content-Type': 'application/json',
    //         },
    //         method: 'POST'
    //       }
    
    //     );
 
    //     if (response.status >= 400) {
    //       return res.status(400).json({
    //         error: 'There was an error'
    //       });
    //     }
    
    //     return res.status(200).json({ status: 'ok' });
    //   } catch (error) {
    //     return res.status(500).json({
    //       error: 'There was an error'
    //     });
    //   }
    // };
  
  
  
  
  }





  return (
    <Section anchor="register" contrast="black register">
      <img className="register_icon  " src="/img/icon/kc-brandmark.svg" />
      <div className="w-full">
        <h2 className="display_alt  text-center mb-6">REGISTER TODAY</h2>

        <div className="head_underline "></div>
       
        {/* <form  name="mc-embedded-subscribe-form" id="reg-form">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
            <div className="grid grid-cols-1 gap-3">
            
            
              <label className="block">
                <span className="text-gray-700 sr-only">First Name </span>
              
                <input
                   name="FNAME" 
                   id="mce-FNAME"
                  type="text"
                  className="form-input appearance-none mt-1 block w-full"
                  placeholder="FIRST NAME"
                  required=""
                />
              </label>


              <label className="block">
                <span className="text-gray-700 sr-only">Last Name</span>
                <input
                name="LNAME" id="mce-LNAME"
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="LAST NAME"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 sr-only">Email</span>
                <input
                name="EMAIL"  id="mce-EMAIL"
                  type="email"
                  className="form-input mt-1 block w-full"
                  placeholder="EMAIL ADDRESS"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 sr-only">Phone Number</span>
                <input
                name="PHONE" id="mce-PHONE"
                  type="tel"
                  className="form-input mt-1 block w-full"
                  placeholder="PHONE NUMBER"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 sr-only">Postal Code</span>
                <input
                name="POSTAL" id="mce-POSTAL"
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="POSTAL CODE"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label className="block">
                <span className="text-gray-700 sr-only">How did you hear about us?</span>
                <select name="HOWDIDU"  id="mce-HOWDIDU"  className="form-select block w-full overflow-x-hidden mt-1">
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
                <select name="PRICER"  id="mce-PRICER" className="form-select block w-full overflow-x-hidden mt-1">
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
                <select name="AREUREALTO"  id="mce-AREUREALTO"  className="form-select block w-full overflow-x-hidden mt-1">
                  <option>ARE YOU A REALTOR?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700 sr-only">First Name </span>
                <select name="WORKREALTR"  id="mce-WORKREALTR" className="form-select block w-full overflow-x-hidden mt-1">
                  <option>ARE YOU WORKING WITH A REALTOR?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>

              <div>
                <label className="inline-flex items-top">
                  <input name="opt-in" value="Opt-In"
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
          <div id="mce-responses" class="clear">
            <div class="response hidden" id="mce-error-response" ></div>
            <div class="response hidden" id="mce-success-response" ></div>
        </div>
        <input type="hidden" name="b_839fb24cef0413753d27dbc3a_f752654c15" tabindex="-1"/>
            <button className="fplan-cta mx-auto" onClick={sayHello}>REGISTER</button>
          </div>
      
        </form> */}

<MailchimpForm></MailchimpForm>

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
        <div className="text-xs mt-32 text-center text-[#f9f7f2] md:w-4/5 mx-auto font-sans">
          The developer reserves the right to modify or make substitutes to the
          building design, specifications and floorplans should they be
          necessary. Renderings, views, and layouts are for illustration
          purposes only. E.&O.E.
        </div>
      </div>
    </Section>
  );
}


// https://nottinghilltowns.us18.list-manage.com/subscribe/post?u=839fb24cef0413753d27dbc3a&amp;id=8b8f942075"