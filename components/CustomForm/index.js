import React, { useState, useEffect } from "react";
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "../InputField";
// import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";
// import { useGHStContext } from '../../../utils/ContextProvider';
// import InputField from "../../ui/InputField/InputField";
import PrimaryCTAButton from "../PrimaryButton";

const CustomForm = ({ status, message, onValidated }) => {
  // const {modalOpen, setModalOpen} = useGHStContext();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [howdidu, setHowdidu] = useState("");
  const [pref, setPref] = useState("");
  const [are_you_realtor, setAreyou] = useState("");
  const [working_with, setWorkingwith] = useState("");
  const [opt_in, setOptin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      phone &&
      postal &&
      howdidu &&
      pref &&
      are_you_realtor &&
      working_with &&
      opt_in &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
        MERGE3: postal,
        MERGE4: phone,
        MERGE5: howdidu,
        MERGE6: pref,
        MERGE7: are_you_realtor,
        MERGE8: working_with,
        MERGE9: opt_in,
      });
  };

  function checkValue(e) {
    const value = e.target.value;
    console.log("You selected " + value);
    setOptin(value);
  }

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title text-base md:text-xl text-center">
        {status === "success"
          ? "Registration received"
          : "Join our email list for project updates."}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending text-center text-gvhGold-100 ">
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success w-8/12 mx-auto text-gvhGold-100 text-center"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          <div className="grid grid-cols-1 gap-3">
            <InputField
              label="First Name"
              onChangeHandler={setFirstName}
              type="text"
              value={firstName}
              placeholder="FIRST NAME*"
              isRequired
            />

            <InputField
              label="Last Name"
              onChangeHandler={setLastName}
              type="text"
              value={lastName}
              placeholder="LAST NAME*"
              isRequired
            />

            <InputField
              label="Email"
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="EMAIL ADDRESS*"
              isRequired
            />

            <InputField
              label="Phone Number"
              onChangeHandler={setPhone}
              type="text"
              value={phone}
              placeholder="PHONE NUMBER*"
              isRequired
            />

            <InputField
              label="Postal Code"
              onChangeHandler={setPostal}
              type="text"
              value={postal}
              placeholder="POSTAL CODE*"
              isRequired
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {/* <InputField
                        label="How did you hear"
                        onChangeHandler={setHowdidu}
                        type="text"
                        value={howdidu}
                        placeholder="555"
                        isRequired
                    /> */}

            <label className="block">
              <span className="text-gray-700 sr-only">
                How did you hear about us?
              </span>
              <select
                name="HOWDIDU"
                id="mce-HOWDIDU"
                className="form-select block w-full overflow-x-hidden mt-1"
                onChange={(e) => setHowdidu(e.target.value)}
                value={howdidu}
                required
              >
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
              <select
                name="PRICER"
                onChange={(e) => setPref(e.target.value)}
                value={pref}
                id="mce-PRICER"
                className="form-select block w-full overflow-x-hidden mt-1"
              >
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
              <select
                name="AREUREALTO"
                onChange={(e) => setWorkingwith(e.target.value)}
                value={working_with}
                id="mce-AREUREALTO"
                className="form-select block w-full overflow-x-hidden mt-1"
              >
                <option>ARE YOU A REALTOR?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700 sr-only">First Name </span>
              <select
                name="WORKREALTR"
                onChange={(e) => setAreyou(e.target.value)}
                value={are_you_realtor}
                id="mce-WORKREALTR"
                className="form-select block w-full overflow-x-hidden mt-1"
              >
                <option>ARE YOU WORKING WITH A REALTOR?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>

            <div>
              <label className="inline-flex items-top">
                <input
                  name="opt-in"
                  value="Opt-In"
                  className="form-checkbox accent-gvhGold-400  appearance-none  mt-1"
                  type="checkbox"
                  onChange={checkValue}
                  // onChange={(e) => setOptin(e.target.value)}
                  // onChange={(e) => handleChange(e.target.value)}
                  // value="I agree"
                />
                <span className="ml-2 text-xs text-gvhGold-100">
                  By checking this box, you agree to receive emails from Gable
                  View Homes or its affiliates and agents, with pricing, floor
                  plans, and site updates.
                </span>
              </label>
            </div>

            {/* 

<InputField
                        label="working with?"
                        onChangeHandler={setWorkingwith}
                        type="text"
                        value={working_with}
                        placeholder="555"
                        isRequired
                    /> */}

            {/* <InputField
                        label="working with?"
                        onChangeHandler={setOptin}
                        type="text"
                        value={opt_in}
                        placeholder="555"
                        isRequired
                    /> */}
          </div>
        </div>
      ) : null}

      {/* Hide submit button if success  */}
      <div className="formActions ">
        {status === "success" ? (
          ""
        ) : (
          <InputField
            label="subscribe"
            type="submit"
            formValues={[
              email,
              firstName,
              lastName,
              phone,
              postal,
              howdidu,
              pref,
              are_you_realtor,
              working_with,
              opt_in,
            ]}
          />
        )}
      </div>
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = `https://nottinghilltowns.us18.list-manage.com/subscribe/post-json?u=839fb24cef0413753d27dbc3a&amp;id=8b8f942075`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
