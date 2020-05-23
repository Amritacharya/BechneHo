import React, { Component } from "react";

import { userActions } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    // reset login status
    this.props.logoutUser();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      modal7: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  toggle(nr) {
    const modalNumber = `modal${nr}`;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber],
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    if (username && password) {
      this.props.loginUser(username, password);
    }
  }
  render() {
    const { loggingIn, error } = this.props;
    const { username, password, submitted, modal7 } = this.state;
    console.log(error);
    return (
      <div className="app flex-row align-items-center">
        {error && (
          <MDBModal
            size="sm"
            className="modal-notify modal-danger text-white"
            isOpen={modal7}
            toggle={() => this.toggle(7)}
          >
            <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
              <h3 style={{ color: "white" }}>An error occurred</h3>
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBIcon
                icon="exclamation-circle"
                size="4x"
                className="animated rotateIn mb-4"
              />
              <p>
                <strong>
                  Unable to login with provided credentials. Try using different
                  credentials.
                </strong>
              </p>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="danger" onClick={() => this.toggle(7)}>
                Okay
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        )}
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup
                        className={
                          "mb-3" + (submitted && !username ? " has-error" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          name="username"
                          onChange={this.onChange}
                          value={username}
                        />
                        {submitted && !username && (
                          <div className="help-block">Email is required</div>
                        )}
                      </InputGroup>
                      <InputGroup
                        className={
                          "mb-4" + (submitted && !password ? " has-error" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={this.onChange}
                          value={password}
                        />{" "}
                        {submitted && !password && (
                          <div className="help-block">Password is required</div>
                        )}
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </Button>
                          {loggingIn && (
                            <img
                              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                              alt="Loader"
                            />
                          )}
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-orange py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Create a account and get enrolled to the BechneHo for
                        buying and Selling products.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loggingIn: PropTypes.bool,
  error: PropTypes.bool,

  loginUser: PropTypes.func,
  logoutUser: PropTypes.func,
};

function mapStateToProps(state) {
  const { loggingIn, error } = state.authentication;
  return {
    loggingIn,
    error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) =>
      dispatch(userActions.login(username, password)),
    logoutUser: () => dispatch(userActions.logout()),
  };
};

const connectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export { connectedLoginPage as LoginPage };
