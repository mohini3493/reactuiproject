import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import s1 from "../../assets/images/s1.png"

const Myaccount = () => {

  return (
    <div className='Myaccount'>
      <div className='myaccount-head'>
        <div>
          <h3>My Account</h3>
          <p>Update your personal details here</p>
        </div>
        <div className='myaccount-head-btn'>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
      <div className='myaccount-infos'>
        <section className='myaccount-info'>
          <h3>Personal Information</h3>
          <hr></hr>
          <form className='myaccount-form'>
            <div className='form-inputs'>
              <div className='input-info'>
                <label for="fullname">Full name</label>
                <input type="text" id="firstName" placeholder="Amrita" />
              </div>
              <div className='input-info lastName'>
                <input type="text" id="LastName" placeholder="Parmar" />
              </div>
            </div>
            <div className='form-inputs'>
              <div className='input-info'>
                <label for="email-address">Email- address</label>
                <input type="text" id="email" placeholder="abc@gmail.com" />
              </div>
              <div className='input-info'>
                <label for="user-name">User name</label>
                <input type="text" id="userName" placeholder="985903478" />
              </div>
            </div>
            <div className='form-inputs'>
              <div className='input-info'>
                <label for="address">Address</label>
                <input type="text" id="address" placeholder="Daystar, Greenvillae township" />
                <input type="text" className='address-input' id="address" placeholder="B/H zydus hospital Anand-388001" />
              </div>
              <div className='input-info'>
                <label for="age">Age</label>
                <input type="text" id="age" placeholder="25" />
              </div>
            </div>
          </form>
        </section>
        <section className='myaccount-info2'>
          <h3>Your Photo</h3>
          <hr></hr>
          <div className='info2-your-photo'>
            <img src={s1} alt='Edit' />
            <div>
              <h4>Edit your photo</h4>
              <div className='info2-your-photo-btn'>
                <span>delete</span>
                <span>update</span>
              </div>
            </div>
          </div>
          <Form.Group controlId="formFile" className='setting-attach'>
            <Form.Control type="file" className='fileQuiz'/>
            <FontAwesomeIcon icon={faCloudUploadAlt} />
            <span>Click to upload</span> or drag and drop SVG,PNG,JPG or GIF (max 800x400px)
          </Form.Group>
        </section>
      </div>
    </div>
  )
};

export default Myaccount;