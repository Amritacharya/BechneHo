import React, { Component } from "react";
import Carousel from "../../components/carousel";
import ProductCard from "../../components/ProductCard";
import { Row } from "reactstrap";
import { MDBCardGroup } from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import { connect } from "react-redux";
import { fetchFeatured } from "../../actions/featuredProduct";
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchFeatured();
  }
  renderFeatured() {
    return this.props.featured.map((product) => {
      console.log(product[0].ad_title);
      return (
        <ProductCard
          name={product[0].ad_title}
          image={product[0].image1}
          price={product[0].price}
          profilepic={product[0].user.profile_pic}
          ads_validity={product[0].ads_validity}
          product={product[0]}
        />
      );
    });
  }
  render() {
    console.log(this.props.featured);
    return (
      <React.Fragment>
        <Carousel />
        <section className="section-main padding-y">
          <Row>
            <SectionContainer header="Featured Products">
              <MDBCardGroup deck className="mt-3">
                {this.renderFeatured()}
              </MDBCardGroup>
            </SectionContainer>
          </Row>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    featured: Object.values(state.featured),
  };
};
export default connect(mapStateToProps, { fetchFeatured })(HomePage);
