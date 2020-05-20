import React from "react";

import { Col } from "reactstrap";

import { Card, Avatar } from "antd";
import {
  ArrowRightOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBCol,
  MDBCarouselInner,
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBModalBody,
  MDBCollapseHeader,
  MDBCarouselItem,
  MDBSelectOption,
  MDBSelectOptions,
  MDBRow,
  MDBSelect,
  MDBSelectInput,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import ChatPage from "../ChatPage";
import { Link } from "react-router-dom";
const { Meta } = Card;
class ProductCard extends React.Component {
  state = {
    modal13: false,
    accordion: 1,
  };
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  onClick = (nr) => () => {
    this.setState({
      accordion: nr,
    });
  };
  renderChat = () => {
    return <ChatPage />;
  };
  render() {
    const { accordion } = this.state;
    return (
      <Col xs="12" sm="3" md="3" lg="2">
        <Card
          //style={{ width: 300 }}

          cover={<img alt={this.props.name} src={this.props.image} />}
          actions={[
            <HeartTwoTone key="favourite" />,
            <MessageOutlined key="message" />,
            <ArrowRightOutlined key="view" onClick={this.toggle(13)} />,
          ]}
        >
          <Meta
            avatar={<Avatar src={this.props.profilepic} />}
            title={this.props.name}
            description={"Rs." + this.props.price}
          />
          <MDBContainer>
            <MDBModal
              size="lg"
              isOpen={this.state.modal13}
              toggle={this.toggle(13)}
            >
              <MDBModalBody className="d-flex">
                <MDBCol size="5" lg="5">
                  <MDBCarousel
                    interval={2000}
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    thumbnails
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                          alt="First slide"
                        />
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                          alt="Second slide"
                        />
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                          alt="Third slide"
                        />
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBCol>
                <MDBCol size="7" lg="7">
                  <h2 className="h2-responsive product-name">
                    <strong>{this.props.product.ad_title}</strong>
                  </h2>
                  <h4 className="h4-responsive">
                    <span className="green-text">
                      <strong>Rs. {this.props.product.price}</strong>
                    </span>
                  </h4>
                  <div className="my-4">
                    <MDBCard>
                      <MDBCollapseHeader onClick={this.onClick(1)}>
                        Description
                        <i className={"ml-1 fa fa-angle-down rotate-icon"} />
                      </MDBCollapseHeader>
                      <MDBCollapse isOpen={accordion === 1}>
                        <MDBCardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod.
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>
                    <MDBCard>
                      <MDBCollapseHeader onClick={this.onClick(2)}>
                        Details
                        <i className={"ml-1 fa fa-angle-down rotate-icon"} />
                      </MDBCollapseHeader>
                      <MDBCollapse isOpen={accordion === 2}>
                        <MDBCardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod.
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>
                    <MDBCard>
                      <MDBCollapseHeader onClick={this.onClick(3)}>
                        Shipping
                        <i className={"ml-1 fa fa-angle-down rotate-icon"} />
                      </MDBCollapseHeader>
                      <MDBCollapse isOpen={accordion === 3}>
                        <MDBCardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod.
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>
                  </div>

                  <MDBRow className="justify-content-center">
                    <Link to="/chat">
                      <MDBBtn
                        gradient="peach"
                        className="ml-4"
                        rounded
                        onClick={this.toggle(13)}
                      >
                        <MDBIcon icon="envelope" className="mr-1" />
                        Message
                      </MDBBtn>
                    </Link>
                  </MDBRow>
                </MDBCol>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </Card>
      </Col>
    );
  }
}

export default ProductCard;
