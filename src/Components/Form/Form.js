import React, { useState } from 'react';
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleForm = (e) => {

    e.preventDefault();
    console.log('state', form)
    const { first_name,
      last_name,
      email,
      phone,
      area_of_interest,
      has_home,
      when_to_move } = form;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: `${first_name} ${last_name}`,
          email: email,
          message: `Phone: ${phone} \n Area of Interest: ${area_of_interest} \n Do you have a home to sell?: ${has_home} \n When would you like to move?: ${when_to_move} `,
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
        setForm({})
      } else if (response.data.msg === 'fail') {
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
        <form className="form" onSubmit={() => {alert('Testing is in progress for the Form...!')}}>
        {/* <form className="form" onSubmit={handleForm}> */}
          <h3 className="form-title">LETS SET A STRATEGY</h3>
          <input type="text" name="first_name" placeholder="First name:" required onChange={handleChange} />
          <input type="text" name="last_name" placeholder="Last name:" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email:" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone:" required onChange={handleChange} />
          <input type="text" name="area_of_interest" placeholder="Which area of Arizona are you interested In? :" required onChange={handleChange} />
          <div className="have-home-wrap">
            <p className="have-home-title">Do you have a home to sell?</p>
            <div className="radio-buttons-inline">
              <div className="radio-button-wrap">
                <input type="radio" name="has_home" value="Yes" onChange={handleChange} /><span className="radio-text" required> Yes</span>
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
            <button type="submit" className="form-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;