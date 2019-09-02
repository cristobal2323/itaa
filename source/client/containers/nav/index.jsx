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
            <li data-parent="i" data-menu="7">
              <a
                id="i"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="7"
              >
                <i className="fas fa-smile" /> Encuestas
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/epworth"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="i"
                  >
                    Epworth
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/pittsburgh"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="i"
                  >
                    Pittsburgh
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="c" data-menu="2">
              <a
                id="c"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="2"
              >
                <i className="fas fa-id-card" /> Datos personales
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_personal_data"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="c"
                  >
                    Listado datos personales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_personal_data"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="c"
                  >
                    Nuevo dato personal
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="d" data-menu="3">
              <a
                id="d"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="3"
              >
                <i className="fas fa-building" /> Trabajador
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_trabajador_empresa"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="d"
                  >
                    Listado Trabajador
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_trabajador_empresa"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="d"
                  >
                    Nuevo Trabajador
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="e" data-menu="4">
              <a
                id="e"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="4"
              >
                <i className="fas fa-medkit" /> Examén medico
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_examen_medico"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="e"
                  >
                    Listado Examén Medico
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_examen_medico"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="e"
                  >
                    Nuevo Examén Medico
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="f" data-menu="4">
              <a
                id="f"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="4"
              >
                <i className="fas fa-child" /> Examén fisico
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_examen_fisico"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="f"
                  >
                    Listado Examén Fisico
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_examen_fisico"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="f"
                  >
                    Nuevo Examén Medico
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="g" data-menu="6">
              <a
                id="g"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="6"
              >
                <i className="fas fa-vial" /> Oximetria
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_oximetria"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="g"
                  >
                    Listado Oximetria
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_oximetria"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="g"
                  >
                    Nuevo Oximetria
                  </Link>
                </li>
              </ul>
            </li>
            <li data-parent="h" data-menu="6">
              <a
                id="h"
                onClick={this.handleNav}
                role="button"
                tabIndex={0}
                data-menu="6"
              >
                <i className="fas fa-bed" /> Polisomnografia
              </a>
              <ul>
                <li>
                  <Link
                    to="/dashboard/list_polisomnografia"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="1"
                    data-parent="h"
                  >
                    Listado Polisomnografia
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add_polisomnografia"
                    className="active"
                    onClick={this.handleSub}
                    role="button"
                    tabIndex={0}
                    data-submenu="2"
                    data-parent="h"
                  >
                    Nuevo Polisomnografia
                  </Link>
                </li>
              </ul>
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
