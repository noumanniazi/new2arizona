import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import FormBGImg from "../../Assets/Images/FormBGImg.jpg";

import "./Form.scss";

const Form = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    area_of_interest: "",
    has_home: "",
    when_to_move: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loader, setloader] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = e => {
    e.preventDefault();
    if (loader) {
      return;
    }
    const {
      first_name,
      last_name,
      email,
      phone,
      area_of_interest,
      has_home,
      when_to_move
    } = form;
    const message = `Phone: ${phone} \nArea of Interest: ${area_of_interest ||
      "No answer selected"} \nDo you have a home to sell?: ${has_home ||
      "No answer selected"} \nWhen would you like to move?: ${when_to_move ||
      "No answer selected"} `;
    setloader(true);
    axios({
      method: "POST",
      // url: "https://new2arizonamailer.herokuapp.com/send",
      url: "http://localhost:3002/send",
      data: {
        name: `${first_name} ${last_name}`,
        email: email,
        message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        setloader(false);
        setFormSubmitted(true);
        setForm({});
      } else {
        setloader(false);
        alert("Message failed to send.");
      }
    });
  };
  return (
    <div className="form-wrap">
      <div className="form-img">
        <img className="form-bg" src={FormBGImg} alt="" />
        <div className="layer"></div>
      </div>
      <div className="website-width form-content">
        {formSubmitted && (
          <div className="form-holder">
            <p>Form is successfully submitted</p>
            <p>We will get back to you!</p>
          </div>
        )}
        <h2>LETS SET A STRATEGY</h2>
        <form
          action="https://www.SnapHost.com/captcha/send.aspx"
          id="ContactUsCaptchaWebForm"
          method="post"
          onsubmit="return ValidateForm(this);"
          target="_top"
        >
          <input
            name="skip_WhereToSend"
            type="hidden"
            value="raymond@enjoyarizonaliving.com"
          />
          <input name="skip_SnapHostID" type="hidden" value="YT7GJMB75BWT" />
          <input
            name="skip_WhereToReturn"
            type="hidden"
            value="http://www.new2arizona.com/Message"
          />
          <input name="skip_Subject" type="hidden" value="New2Arizona Contact Us Form" />
          <input name="skip_ShowUsersIp" type="hidden" value="1" />
          <input name="skip_SendCopyToUser" type="hidden" value="1" />

          <table border="0" cellpadding="5" cellspacing="0" width="600">
            <tr>
              <td>
                <input
                  name="FirstName"
                  type="text"
                  maxlength="60"
                  placeholder="First Name:"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="LastName"
                  type="text"
                  maxlength="60"
                  placeholder="Last Name:"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="EmailAddress"
                  type="email"
                  maxlength="60"
                  placeholder="Email:"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="PhoneNumber"
                  type="text"
                  maxlength="43"
                  placeholder="Phone Number:"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="InterestedAreaInAZ"
                  type="text"
                  placeholder="What area of Arizona are you interested?"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="HaveHomeToSell"
                  type="text"
                  placeholder="Do you have a home to sell?"
                ></input>
              </td>
            </tr>
            <tr>
              <div className="radio-button-text">
                When would you like to move?
              </div>
            </tr>{" "}
            <tr className="radio-button">
              <article>
                {" "}
                <input
                  type="radio"
                  id="3Months"
                  name="moveTime"
                  value="3 Months"
                />{" "}
                <label for="3Months">3 Months</label>
              </article>
              <article>
                <input
                  type="radio"
                  id="6Months"
                  name="moveTime"
                  value="6 Months"
                />
                <label for="6Months">6 Months</label>
              </article>
              <article>
                {" "}
                <input
                  type="radio"
                  id="9Months"
                  name="moveTime"
                  value="9 Months"
                />{" "}
                <label for="9Months">9 Months</label>
              </article>
              <article>
                <input type="radio" id="1Year" name="moveTime" value="1 Year" />
                <label for="1Year">1 Year</label>
              </article>
            </tr>
            <tr className='submit-wrapper'>
              <td colspan="2" align="center">
                {" "}
                <br />
                <div className='code' border="0" cellpadding="0" cellspacing="0">
                
                  <tr  className='text' valign="top">
                    <td>
                      {" "}
                     Enter web form code*:
                      <input
                        name="skip_CaptchaCode"
                        type="text"
                        style={{ width: "80px" }}
                        maxlength="6"
                      />
                    </td>
                    <td>
                      <a href="https://www.snaphost.com/captcha/ReadyForms/ContactUsForm.aspx">
                        <img
                          id="CaptchaImage"
                          alt="New2Arizona Contact Us form"
                          title="HTML code for Contact Us form"
                          style={{ marginLeft: "20px" }}
                          src="https://www.SnapHost.com/captcha/CaptchaImage.aspx?id=YT7GJMB75BWT&ImgType=2"
                        />
                      </a>
                      <br />
                    </td>
                  </tr>
                </div>{" "}
             
                <input
                  className="submit-button"
                  name="skip_Submit"
                  type="submit"
                  value="Submit"
                 
                />
              </td>
            </tr>
          </table>
          <br />
        </form>
        {/* {!formSubmitted &&
          // <form className="form" onSubmit={handleForm}>
          //   <h3 className="form-title">LETS SET A STRATEGY</h3>
          //   <input type="text" name="first_name" placeholder="First name:*" required onChange={handleChange} />
          //   <input type="text" name="last_name" placeholder="Last name:" onChange={handleChange} />
          //   <input type="email" name="email" placeholder="Email:*" required onChange={handleChange} />
          //   <input type="text" name="phone" placeholder="Phone:*" required onChange={handleChange} />
          //   <input type="text" name="area_of_interest" placeholder="Which area of Arizona are you interested In? :" onChange={handleChange} />
          //   <div className="have-home-wrap">
          //     <p className="have-home-title">Do you have a home to sell?</p>
          //     <div className="radio-buttons-inline">
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="has_home" value="Yes" onChange={handleChange} /><span className="radio-text"> Yes</span>
          //       </div>
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="has_home" value="No" onChange={handleChange} /> <span className="radio-text" > No</span>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="when-to-move-wrap">
          //     <p className="when-to-move-title">When would you like to move?</p>
          //     <div className="radio-buttons-inline">
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="when_to_move" value="3 Months" onChange={handleChange} /><span className="radio-text"> 3 Months</span>
          //       </div>
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="when_to_move" value="6 Months" onChange={handleChange} /> <span className="radio-text"> 6 Months</span>
          //       </div>
          //     </div>
          //     <div className="radio-buttons-inline">
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="when_to_move" value="9 Months" onChange={handleChange} /><span className="radio-text"> 9 Months</span>
          //       </div>
          //       <div className="radio-button-wrap">
          //         <input type="radio" name="when_to_move" value="1 Year" onChange={handleChange} /> <span className="radio-text"> 1 Year</span>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="form-submit-btn-wrap">
          //     <button type="submit" className={`form-submit-btn ${loader ? 'submitting' : ''}`}>Submit <Loader type="TailSpin" color="#ffffff" height={10} width={10} visible={loader} /></button>
          //   </div>
          // </form>
        } */}
      </div>
    </div>
  );
};

export default Form;
