import React, { useEffect} from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CategoryClassCard = React.lazy(() => import('../components/category-class-card'));

const filters = [
  {
    url: "#",
    title: "All Classes"
  },
  {
    url: "#",
    title: "Coming Soon"
  },
  {
    url: "#",
    title: "Just Added"
  },
  {
    url: "#",
    title: "trending"
  },
  {
    url: "#",
    title: "30-Day Sessions"
  },
  {
    url: "#",
    title: "Recently Viewed"
  }
]
const categories = [
  {
    url: "#",
    title: "Food",
    isActive: "true"
  },
  {
    url: "#",
    title: "Design & Style"
  },
  {
    url: "#",
    title: "Arts & Entertainment"
  },
  {
    url: "#",
    title: "Music"
  },
  {
    url: "#",
    title: "Business"
  },
  {
    url: "#",
    title: "Sports & Gaming"
  },
  {
    url: "#",
    title: "Writing"
  },
  {
    url: "#",
    title: "Science & Tech"
  },
  {
    url: "#",
    title: "Home & Lifestyle"
  },
  {
    url: "#",
    title: "Community & Govenrment"
  },
  {
    url: "#",
    title: "Wellness"
  }
]
const classes = [
  {
    id: 1,
    imageURL: "d3.png",
    imageAltText: "Suresh Pillai profile",
    title: "Suresh Pillai",
    description: "Teaches Authentic Kerela food",
    ctaURL: "/course-landing"
  },
  {
    id: 2,
    imageURL: "d1.png",
    imageAltText: "Dulquer Salmaan profile",
    title: "Dulquer Salmaan",
    description: "How to live a character",
    ctaURL: "/course-landing"
  },
  {
    id: 3,
    imageURL: "d2.png",
    imageAltText: "Shreya Ghoshal profile",
    title: "Shreya Ghoshal",
    description: "Getting good at singing",
    ctaURL: "/course-landing"
  },
  {
    id: 4,
    imageURL: "d1.png",
    imageAltText: "Dulquer Salmaan profile",
    title: "Dulquer Salmaan",
    description: "How to live a character",
    ctaURL: "/course-landing"
  },
  {
    id: 5,
    imageURL: "d2.png",
    imageAltText: "Shreya Ghoshal profile",
    title: "Shreya Ghoshal",
    description: "Getting good at singing",
    ctaURL: "/course-landing"
  },
  {
    id: 6,
    imageURL: "d3.png",
    imageAltText: "Suresh Pillai profile",
    title: "Suresh Pillai",
    description: "Teaches Authentic Kerela food",
    ctaURL: "/course-landing"
  },
  {
    id: 7,
    imageURL: "d3.png",
    imageAltText: "Suresh Pillai profile",
    title: "Suresh Pillai",
    description: "Teaches Authentic Kerela food",
    ctaURL: "/course-landing"
  },
  {
    id: 8,
    imageURL: "d1.png",
    imageAltText: "Dulquer Salmaan profile",
    title: "Dulquer Salmaan",
    description: "How to live a character",
    ctaURL: "/course-landing"
  },
  {
    id: 9,
    imageURL: "d2.png",
    imageAltText: "Shreya Ghoshal profile",
    title: "Shreya Ghoshal",
    description: "Getting good at singing",
    ctaURL: "/course-landing"
  },
]
const filtersList = filters.map((filter, index) =>
  <li key={index}><Link to={filter.url}>{filter.title}</Link></li>
);
const categoriesList = categories.map((category, index) =>
  <li key={index} className={category.isActive ? "isActive" : ""}>
    <Link to={category.url}>{category.title}</Link>
  </li>
);

const filtersList2 = filters.map((f) =>
  // <NavDropdown.Item href={f.url}>{f.title}</NavDropdown.Item>
  <NavDropdown.Item><Link to={f.url}>{f.title}</Link></NavDropdown.Item>

);
const categoriesList2 = categories.map((c) =>
  <li className={c.isActive ? "isActive" : ""}>
    {/* <NavDropdown.Item href={c.url}>{c.title}</NavDropdown.Item> */}
    <NavDropdown.Item><Link to={c.url}>{c.title}</Link></NavDropdown.Item>
  </li>

);


const classesGrid = classes.map((card) =>
  <Col lg={4} md={6} sm={12}>
    <CategoryClassCard {...card} />
  </Col>
);

const CategoryPage = () => {
  useEffect(() => {
    document.title = "Category - Wise Talkies";
  }, []);

  return (
    <div className="website-container top-spacing">
      <Container className="category-page">
        <Row>
          <Col>
            <Alert variant='get-started'>
              <p>Get 150+ classes across 11 categories.</p>
              <div className='alert-action'>
                <p>₹1,295/month billed annually</p>
                <Link to="/login" className="btn btn-branded">Get Started</Link>
              </div>
            </Alert>
          </Col>
        </Row>
        <div className='hide-xl categorys-links'>
          <Dropdown>
            <Dropdown.Toggle className='mobile-category'>
              <FontAwesomeIcon icon={faSliders} /> Category
            </Dropdown.Toggle>
            <Dropdown.Menu className='mobile-category-links'>
              <ul className='category-filter'>
                <h1 className='category-title'>Food</h1>
                {filtersList2}
              </ul>
              <ul className='category-list'>
                {categoriesList2}
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <section className='categorys'>
          <div className='categorys-links hide-sm hide-md hide-lg'>
            <div>
              <ul className='category-filter'>
                <h1 className='category-title'>Food</h1>
                {filtersList}
              </ul>
              <ul className='category-list'>
                {categoriesList}
              </ul>
            </div>
          </div>
          <Col lg={9} md={9} sm={12} className='classes-container'>
            <Row>
              {classesGrid}
            </Row>
          </Col>
        </section>
      </Container>
    </div>
  )
}

export default CategoryPage;