import React, { Fragment } from "react";
import Header from '../components/header';
import Footer from '../components/footer';

const WebsiteLayout = (props) => {
  return (
    <Fragment>
      <Header admin={props.admin}/>
      <main className={`website-container ${props.className}`}>
        {props.children}
      </main>
      <Footer/>
    </Fragment>
    
  )
}

export default WebsiteLayout