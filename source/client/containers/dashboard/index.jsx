import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as dashboardActions from "../../actions/dashboard/index";
import * as loginactions from "../../actions/login/index";

/* Components */
import Nav from "../nav/";
import Header from "../header/";
import Home from "../home/";
import ListUser from "../list_user/";
import AddUser from "../add_user/";
import Expired from "../expired/index";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    /* Verificamos el auth */
    let auth = localStoreFN().getItem("auth");
    const user = localStoreFN().getItem("user");
    auth = auth === "true";
    if (auth) {
      await this.props.actions.fetchDashboardApi({ user });
    }
  }

  /* Función de cerrar sesíon */
  handleLogOut = async () => {
    await this.props.loginActions.logOut();
    this.props.actions.resetDashboard();
    this.props.history.push("/");
  };

  /* Render: contamos con el Header y Nav */
  render() {
    let container;
    if (this.props.status === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.status === 200) {
      if (this.props.data.ejecucion) {
        if (this.props.data.ejecucion.estado) {
          container = (
            <main>
              <Header
                loading={this.props.loading}
                data={this.props.data}
                handleLogOut={this.handleLogOut}
              />
              <Nav data={this.props.data} />
              <Route exact path={this.props.match.path} component={Home} />
              <Route
                path={`${this.props.match.path}/list_user`}
                component={ListUser}
              />
              <Route
                path={`${this.props.match.path}/add_user`}
                component={AddUser}
              />
            </main>
          );
        } else {
          container = <main />;
        }
      } else {
        container = <main />;
      }
    } else {
      container = <main />;
    }
    return container;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.dashboard.data,
  loading: state.reducer.dashboard.loading,
  status: state.reducer.dashboard.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(dashboardActions, dispatch),
  loginActions: bindActionCreators(loginactions, dispatch)
});

Dashboard.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  loginActions: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
