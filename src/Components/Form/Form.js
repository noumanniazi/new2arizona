import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';

import FormBGImg from '../../Assets/Images/FormBGImg.jpg'

import './Form.scss';

const Form = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    area_of_interest: '',
    has_home: '',
    when_to_move: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loader, setloader] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleForm = (e) => {

    e.preventDefault();
    if(loader){
      return;
    }
    const { first_name,
      last_name,
      email,
      phone,
      area_of_interest,
      has_home,
      when_to_move } = form;
    const message = `Phone: ${phone} \nArea of Interest: ${area_of_interest || 'No answer selected'} \nDo you have a home to sell?: ${has_home || 'No answer selected'} \nWhen would you like to move?: ${when_to_move || 'No answer selected'} `
    setloader(true);
    axios({
      method: "POST",
      url: "https://new2arizonamailer.herokuapp.com/send",
      data: {
        name: `${first_name} ${last_name}`,
        email: email,
        message,
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        setloader(false);
        setFormSubmitted(true);
        setForm({})
      } else {
        setloader(false);
        alert("Message failed to send.")
      }
    })
  }
  return (
    <div className="form-wrap">
      <div className="form-img">
        <img className="form-bg" src={FormBGImg} alt="" />
        <div className="layer"></div>
      </div>
      <div className="website-width form-content">
        {formSubmitted && (<div className="form-holder">
          <p>Form is successfully submitted</p>
          <p>We will get back to you!</p>
        </div>)}
        {!formSubmitted &&
          <form className="form" onSubmit={handleForm}>
            <h3 className="form-title">LETS SET A STRATEGY</h3>
            <input type="text" name="first_name" placeholder="First name:*" required onChange={handleChange} />
            <input type="text" name="last_name" placeholder="Last name:" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email:*" required onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone:*" required onChange={handleChange} />
            <input type="text" name="area_of_interest" placeholder="Which area of Arizona are you interested In? :" onChange={handleChange} />
            <div className="have-home-wrap">
              <p className="have-home-title">Do you have a home to sell?</p>
              <div className="radio-buttons-inline">
                <div className="radio-button-wrap">
                  <input type="radio" name="has_home" value="Yes" onChange={handleChange} /><span className="radio-text"> Yes</span>
                </div>
                <div className="radio-button-wrap">
                  <input type="radio" name="has_home" value="No" onChange={handleChange} /> <span className="radio-text" > No</span>
                </div>
              </div>
            </div>
            <div className="when-to-move-wrap">
              <p className="when-to-move-title">When would you like to move?</p>
              <div className="radio-buttons-inline">
                <div className="radio-button-wrap">
                  <input type="radio" name="when_to_move" value="3 Months" onChange={handleChange} /><span className="radio-text"> 3 Months</span>
                </div>
                <div className="radio-button-wrap">
                  <input type="radio" name="when_to_move" value="6 Months" onChange={handleChange} /> <span className="radio-text"> 6 Months</span>
                </div>
              </div>
              <div className="radio-buttons-inline">
                <div className="radio-button-wrap">
                  <input type="radio" name="when_to_move" value="9 Months" onChange={handleChange} /><span className="radio-text"> 9 Months</span>
                </div>
                <div className="radio-button-wrap">
                  <input type="radio" name="when_to_move" value="1 Year" onChange={handleChange} /> <span className="radio-text"> 1 Year</span>
                </div>
              </div>
            </div>
            <div className="form-submit-btn-wrap">
              <button type="submit" className={`form-submit-btn ${loader ? 'submitting' : ''}`}>Submit <Loader type="TailSpin" color="#ffffff" height={10} width={10} visible={loader} /></button>
            </div>
          </form>
        }
      </div>
    </div>
  );
}

export default Form;