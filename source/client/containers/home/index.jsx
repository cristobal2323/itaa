import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Actions */
import * as homeActions from "../../actions/home/index";

import Bread from "../../components/home/bread";
import Title from "../../components/home/title";
import List from "../../components/home/list";
import Graph from "../../components/home/graph";
import Expired from "../expired/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    //await this.props.actions.fetchHomeApi({});
  }

  /* Función de cerrar sesíon */
  handleNav = async event => {
    const selectAll = document.querySelectorAll("[data-menuh]");
    for (let i = 0; selectAll.length > i; i++) {
      selectAll[i].classList.remove("active");
    }

    event.target.classList.add("active");
    const inputDate = document.getElementById("date").value;

    await this.props.actions.fetchHomeGraphApi({
      id: event.target.id,
      date: inputDate
    });
  };

  render() {
    let container;
    if (this.props.status === 401 || this.props.statusGraph === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <section className="container-home" />
        </div>
      );
    }
    return <section className="main-container">{container}</section>;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.home.data,
  loading: state.reducer.home.loading,
  status: state.reducer.home.status,
  dataGraph: state.reducer.home.dataGraph,
  loadingGraph: state.reducer.home.loadingGraph,
  statusGraph: state.reducer.home.statusGraph
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(homeActions, dispatch)
});

Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
