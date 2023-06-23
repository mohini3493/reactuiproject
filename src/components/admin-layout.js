import React, { Fragment } from "react";
import Header from '../components/header';
import Footer from '../components/footer';

const AdminLayout = ({children}) => {
  return (
    <Fragment>
      <Header/>
      <main className="admin-container">
        {children}
      </main>
      <Footer/>
    </Fragment>
    
  )
}

export default AdminLayout