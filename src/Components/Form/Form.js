import React from "react";

import FormBGImg from "../../Assets/Images/FormBGImg.jpg";

import "./Form.scss";

const Form = () => {

  return (
    <div className="form-wrap">
      <div className="form-img">
        <img className="form-bg" src={FormBGImg} alt="" />
        <div className="layer"></div>
      </div>
      <div className="website-width form-content">
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
      </div>
    </div>
  );
};

export default Form;
