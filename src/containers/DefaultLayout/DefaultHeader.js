import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Badge,
} from "reactstrap";
import PropTypes from "prop-types";

import { AppNavbarBrand } from "@coreui/react";
import logo from "../../assets/logo_splash.png";
import sygnet from "../../assets/logo_splash.png";
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {" "}
        <AppNavbarBrand
          full={{ src: logo, width: 80, height: 40, alt: "BechneHo" }}
        />
        <Nav className="d-md-down-none " navbar>
          <NavItem className="d-md-down-none">
            <form action="#" class="search-header">
              <div class="input-group w-100">
                <select class="custom-select border-right" name="category_name">
                  <option value="">All type</option>
                  <option value="codex">Special</option>
                  <option value="comments">Only best</option>
                  <option value="content">Latest</option>
                </select>
                <input type="text" class="form-control" placeholder="Search" />

                <div class="input-group-append">
                  <button class="btn btn-warning" type="submit">
                    <i class="fa fa-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
          </NavItem>
        </Nav>
        {localStorage.getItem("user") ? (
          <Nav navbar>
            <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link">
                <i className="fa fa-2x fa-commenting"></i>
                <Badge pill color="danger">
                  5
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link">
                <i className="fa fa-2x fa-shopping-basket"></i>
              </NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link">
                <i className="fa fa-2x fa-shopping-cart"></i>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img
                  src={
                    "https://scontent.fktm4-1.fna.fbcdn.net/v/t1.0-1/p480x480/82335335_2588723864734631_4782920553428156416_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_oc=AQnjqsBqkx0D8tegdORs4OOs4UA_Tpmz468ouWnTX9lU5DOQZPTdBGxzo85S0slGROU&_nc_ht=scontent.fktm4-1.fna&_nc_tp=6&oh=78559fa2413b00e49c66ae611501b62c&oe=5EE77D02"
                  }
                  className="img-avatar"
                  alt="admin@bootstrapmaster.com"
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Settings</strong>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-user"></i> Profile
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-wrench"></i> Settings
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                  <i className="fa fa-lock"></i> Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        ) : (
          <Nav navbar>
            <NavItem className="d-md-down-none">
              <NavLink to="/login" className="nav-link">
                <i className="fa fa-2x fa-sign-in"></i>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
