import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faComputer, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Device = () => {
  const data = [
    {
      id: 1,
      describtion: "Hey Laura, your Monthly Report is ready for you Review",
      date: "19-04-22",
      time: "5:30 pm",
    },
    {
      id: 2,
      describtion: "Hey Laura, your Monthly Report is ready for you Review",
      date: "19-04-22",
      time: "5:30 pm",
    },
    {
      id: 3,
      describtion: "Hey Laura, your Monthly Report is ready for you Review",
      date: "19-04-22",
      time: "5:30 pm",
    },
    {
      id: 4,
      describtion: "Hey Laura, your Monthly Report is ready for you Review",
      date: "19-04-22",
      time: "5:30 pm",
    },
    {
      id: 5,
      describtion: "Hey Laura, your Monthly Report is ready for you Review",
      date: "19-04-22",
      time: "5:30 pm",
    }
  ]

  const notifications = data.map((n, index) => {
    return (
      <div key={n.id + index} className="notifition">
        <p>{n.describtion}</p>
        <div className="notifition-date">
          <span>{n.date}</span>
          <span>{n.time}</span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div>
        <div>
          <h3>Device</h3>
          <p>About device</p>
        </div>
      </div>
      <div className='device-container'>
        <section className='device-data'>
          <h2>Devices</h2>
          <hr></hr>
          <h3 className='looged-text'>Logged in device</h3>
          <div className='device-wrapper'>
            <div className='loptop-wrapper'>
              <div className='device-info device-name'>
                <span>Device name</span>
                <span>
                  <div className='device-icon'>
                    <p>
                      <FontAwesomeIcon icon={faComputer} />
                      Laptop</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </span>
              </div>
              <div className='device-info with-border'>
                <span>Model number</span>
                <span>A1625</span>
              </div>
              <div className='device-info'>
                <span>Version</span>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className='device-wrapper'>
            <div className='loptop-wrapper'>
              <div className='device-info device-name'>
                <span>Device name</span>
                <span>
                  <div className='device-icon'>
                    <p>
                      <FontAwesomeIcon icon={faMobile} />
                      Mobile</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </span>
              </div>
              <div className='device-info with-border'>
                <span>Model number</span>
                <span>LLD10</span>
              </div>
              <div className='device-info'>
                <span>Android version</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </section>
        <section className='device-notifitions'>
          <div className='notifitions-head'>
            <h3>Notifications</h3>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <hr></hr>
          <div className='notifitions-info'>
            {notifications}
          </div>
        </section>
      </div>
    </div>
  )
};

export default Device;