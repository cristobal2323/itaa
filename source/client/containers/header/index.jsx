import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";

import Logo from "../../../../public/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="container-logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="container-user">
          <div className="container-user--img">
            <h3>{`${this.props.data.datos.email.substr(0, 2)}`}</h3>
          </div>
          <div className="container-user--mame">
            <div>
              <p>{`${this.props.data.datos.email}`}</p>
              <span>
                <ul>
                  <li>
                    <a className="title">Itaa:</a>
                  </li>
                  <li>
                    <a>{this.props.data.datos.email}</a>
                  </li>
                  <li>
                    <a
                      role="button"
                      tabIndex={0}
                      onClick={this.props.handleLogOut}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Header.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
