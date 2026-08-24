import MailchimpForm from "../CustomForm";
import Section from "../Section";



export default function Registration() {


  return (
    <Section anchor="register" contrast="black register">
      <img className="register_icon  " src="/img/icon/kc-brandmark.svg" />
      <div className="w-full">
        <h2 className="display_alt uppercase text-center mb-6">Leasing Inquiry</h2>

        <div className="head_underline "></div>
       
       
<MailchimpForm></MailchimpForm>

        <div className="max-w-[500px] mt-20">
          <h2 className="display_h3 mb-2">
            {" "}
            Have questions?
          </h2>
          <div className="text-slate-600 mt-5">
         
            <p className="text-gvhGold-100 md:text-lg flex items-center  mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 h-5 w-5 icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="#FFF" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
</svg>
              289.498.3213</p>
              
          
            <p className="text-gvhGold-100 flex items-center md:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-2 h-6 w-6 icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#192128" fill="white" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <rect x="3" y="5" width="18" height="14" rx="2"></rect>
   <polyline points="3 7 12 13 21 7"></polyline>
</svg>
              leasing@gableviewhomes.com
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


