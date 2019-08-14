import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/add_oximetria/bread";
import Title from "../../components/add_oximetria/title";
import Form from "../../components/add_oximetria/form";
import Spiner from "../../components/add_oximetria/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as addOximetriaActions from "../../actions/add_oximetria/index";

class AddOximetria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombres: "",
        spo2Basal: "",
        spo2Media: "",
        spo2Minima: "",
        cantidadDesaturacion85: "",
        cantidadDesaturacion80: "",
        tiempoSpo285: "",
        desaturacionMasLarga: "",
        desaturacionMasGrande: "",
        desaturacionPromedio: "",
        desaturacionMasProfunda: "",
        sumaDesaturaciones: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchOximetriaInfoApi({});
  }

  componentWillUnmount() {
    this.props.actions.resetAddOximetria();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    //await this.props.actions.saveUserApi(this.state.form);
  };

  /* Funcion handle change */
  handleChange = async e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    if (e.target.name == "region") {
      await this.props.actions.fetchOximetriaInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.actions.fetchOximetriaInfoApi({
        region: document.getElementById("region").value,
        provincia: e.target.value
      });
    }
  };

  render() {
    let container;
    if (this.props.statusInfo === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.statusInfo === 200) {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Form
            form={this.state.form}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.props.dataInfo}
            status={this.props.statusInfo}
            loading={this.props.loadingInfo}
            dataSave={0}
            statusSave={false}
          />
        </div>
      );
    } else {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Spiner loading={true} />
        </div>
      );
    }

    return <section className="main-container">{container}</section>;
  }
}

const mapStateToProps = state => ({
  dataInfo: state.reducer.add_oximetria.dataInfo,
  loadingInfo: state.reducer.add_oximetria.loadingInfo,
  statusInfo: state.reducer.add_oximetria.statusInfo
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addOximetriaActions, dispatch)
});

AddOximetria.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOximetria);
