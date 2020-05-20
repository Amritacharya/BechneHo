import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
import slide1 from "../../assets/banners/slide1.jpg";
import slide2 from "../../assets/banners/slide2.jpg";
import slide3 from "../../assets/banners/slide3.jpg";

import item1 from "../../assets/items/1.jpg";
import item2 from "../../assets/items/2.jpg";
import item3 from "../../assets/items/3.jpg";
import { NavLink } from "react-router-dom";
const items = [
  {
    id: 1,
    src: slide1,
    altText: "Advertisement 1",
    caption: "Advertisement 1",
  },
  {
    id: 2,
    src: slide2,
    altText: "Advertisement 2",
    caption: "Advertisement 2",
  },
  {
    id: 3,
    src: slide3,
    altText: "Advertisement 3",
    caption: "Advertisement 3",
  },
];

class Carousels extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const slides = items.map((item) => {
      return (
        <MDBCarouselItem itemId={item.id}>
          <MDBView>
            <img className="d-block w-100" src={item.src} alt={item.altText} />
          </MDBView>
        </MDBCarouselItem>
      );
    });

    return (
      <section className="section-main padding-y">
        <main>
          <Card>
            <CardBody>
              <Row>
                <Col md="3" xl="3" lg="3">
                  <aside className="flex-lg-grow-0">
                    <h6>MY MARKETS</h6>
                    <nav className="nav-home-aside">
                      <ul className="menu-category">
                        <li>
                          <NavLink to="/">Fashion and clothes</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Automobile and motors</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Gardening and agriculture</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Electronics and tech</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Packaginf and printing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Home and kitchen</NavLink>
                        </li>
                        <li>
                          <NavLink to="/">Digital goods</NavLink>
                        </li>
                        <li className="has-submenu">
                          <NavLink to="/">More items</NavLink>
                          <ul className="submenu">
                            <li>
                              <NavLink to="/">Submenu name</NavLink>
                            </li>
                            <li>
                              <NavLink to="/">Great submenu</NavLink>
                            </li>
                            <li>
                              <NavLink to="/">Another menu</NavLink>
                            </li>
                            <li>
                              <NavLink to="/">Some others</NavLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </aside>
                </Col>
                <Col md="9" xl="9" lg="9">
                  <MDBCarousel
                    interval={2500}
                    activeItem={1}
                    length={3}
                    showControls
                    showIndicators
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>{slides}</MDBCarouselInner>
                  </MDBCarousel>
                </Col>{" "}
              </Row>{" "}
            </CardBody>
          </Card>
        </main>
      </section>
    );
  }
}

export default Carousels;
