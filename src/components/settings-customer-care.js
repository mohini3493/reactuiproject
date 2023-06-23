import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faMicrophone, faFile, faEllipsisVertical, faPhone } from "@fortawesome/free-solid-svg-icons";
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';
import s1 from "../assets/images/s1.png"

const Customercare = () => {

  return (
    <div>
      <div className='customer-head'>
        <div>
          <h3>Chatbox</h3>
          <p>Connect if any issues</p>
        </div>
        <div className='customer-head-btn'>
          <FontAwesomeIcon icon={faPhone} />
          <span>+1800 0000 994</span>
        </div>
      </div>
      <section className='chatbox'>
        <div className='chatbox-head'>
          <div className='chatbox-head-info'>
            <div className='chatbox-head-img'>
              <img src={s1} alt="Customer Online" />
              <div></div>
            </div>
            <div>
              <h3>Wise Talkies</h3>
              <span>Online</span>
            </div>
          </div>
          <div className='chatbox-head-icons'>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
        <div className='chat-area'>
          <div className='chat-area-day'>
            <span>today</span>
            <div></div>
          </div>
          <div className='chat-area-msg'>
            <p>sed quia consequuntur magni dolores</p>
            <p>nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea</p>
            <span>Wednesday, December 23th, 2020  at 4.30 AM</span>
          </div>
        </div>
        <div className='chat-input'>
          <InputGroup>
            <FormControl
              placeholder="Your messages.."
            />
            <Button><FontAwesomeIcon icon={faMicrophone} /></Button>
            <Button><FontAwesomeIcon icon={faFile} /></Button>
            <Button><FontAwesomeIcon icon={faPaperPlane} /></Button>
          </InputGroup>
        </div>
      </section>
    </div>
  )
};

export default Customercare;