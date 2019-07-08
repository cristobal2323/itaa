import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as navActions from "../../actions/nav/index";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const nav = localStoreFN().getItem("nav");
    if (nav) {
      document.querySelector(`[data-parent=${nav}]`).classList.add("active");
      document.getElementById(nav).classList.add("active");
    } else {
      document.querySelector(`[data-parent=a]`).classList.add("active");
      document.getElementById("a").classList.add("active");
    }
  }

  handleNav = event => {
    const selectAll = document.querySelectorAll("[data-menu]");
    for (let i = 0; selectAll.length > i; i++) {
      if (event.target.dataset.menu !== selectAll[i].dataset.menu)
        selectAll[i].classList.remove("active");
    }

    const selectAlls = document.querySelectorAll("[data-submenu]");
    for (let i = 0; selectAlls.length > i; i++) {
      selectAlls[i].classList.remove("active");
    }

    document
      .querySelector(`[data-parent=${event.target.id}]`)
      .classList.toggle("active");
    event.target.classList.toggle("active");

    if (event.target.classList.contains("ok")) {
      this.props.actions.saveNav(event.target.id);
    }
  };

  handleSub = event => {
    const selectAll = document.querySelectorAll("[data-submenu]");
    for (let i = 0; selectAll.length > i; i++) {
      selectAll[i].classList.remove("active");
    }
    event.target.classList.add("active");
    this.props.actions.saveNav(event.target.dataset.parent);
  };

  render() {
    let permits = [];
    if (localStoreFN().getItem("permits")) {
      permits = localStoreFN().getItem("permits");
    }
    return (
      <nav>
        <div className="container-user top">
          <div className="container-user--img">
            <h3>{`${this.props.data.datos.email.substr(0, 2)}`}</h3>
          </div>
          <div className="container-user--mame">
            <div>
              <p>{`${this.props.data.datos.email}`}</p>
            </div>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li className="direct" data-parent="a" data-menu="0">
              <Link
                to="/dashboard"
                className="ok"
                id="a"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="0"
              >
                <i className="fas fa-eye" /> Home
              </Link>
            </li>
            {permits.includes("admin") && (
              <li data-parent="b" data-menu="1">
                <a
                  id="b"
                  onClick={this.handleNav}
                  role="button"
                  tabIndex={0}
                  data-menu="1"
                >
                  <i className="fas fa-user" /> Usuario
                </a>
                <ul>
                  <li>
                    <Link
                      to="/dashboard/list_user"
                      className="active"
                      onClick={this.handleSub}
                      role="button"
                      tabIndex={0}
                      data-submenu="1"
                      data-parent="b"
                    >
                      Listado Usuario
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/add_user"
                      className="active"
                      onClick={this.handleSub}
                      role="button"
                      tabIndex={0}
                      data-submenu="2"
                      data-parent="b"
                    >
                      Nuevo Usuario
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.reducer.nav.nav
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(navActions, dispatch)
});

Nav.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
