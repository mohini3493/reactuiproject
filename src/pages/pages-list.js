import React from "react";

const menu = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Category",
    url: "/category"
  },
  {
    title: "404",
    url: "/notfound"
  },
  {
    title: "faq",
    url: "/faq"
  },
  {
    title: "Contact US",
    url: "/contact-us"
  },
  {
    title: "login",
    url: "/login"
  },
  {
    title: "Membership",
    url: "/membership"
  },
  {
    title: "======",
    url: "#"
  },
  {
    title: "Admin Sample",
    url: "/admin-sample"
  },
  {
    title: "======",
    url: "#"
  },
  {
    title: "Pages list",
    url: "/pages-list"
  }
]

const PagesList = () => {
  const navMenu = menu.map((link, index) => <li><a href={link.url}>{link.title}</a></li>)
  return (
    <ul>
      {navMenu}
    </ul>
  )
}

export default PagesList;