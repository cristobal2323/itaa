import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/add_examen_fisico/bread";
import Title from "../../components/add_examen_fisico/title";
import Form from "../../components/add_examen_fisico/form";
import Spiner from "../../components/add_examen_fisico/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as addExamenFisicoActions from "../../actions/add_examen_fisico/index";

class AddExamenFisico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombres: "",
        peso: "",
        talla: "",
        imc: "",
        malampati: "",
        calidad_sueno: "",
        cintura: "",
        cuello: "",
        presionArterial: "",
        presionArterialDiastolica: "",
        pulso: "",
        temperatura: "",
        frecuenciaCardiaca: "",
        saturacionOxigeno: "",
        tabaquismo: "",
        medicamentos: "",
        roncador: "",
        hipertensionArterial: "",
        diabetes: "",
        enfermedadesCardiacas: "",
        otroAntecedentes: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchExamenFisicoInfoApi({});
  }

  componentWillUnmount() {
    this.props.actions.resetAddExamenFisico();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.actions.saveUserApi(this.state.form);
  };

  /* Funcion handle change */
  handleChange = async e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
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
  dataInfo: state.reducer.add_examen_fisico.dataInfo,
  loadingInfo: state.reducer.add_examen_fisico.loadingInfo,
  statusInfo: state.reducer.add_examen_fisico.statusInfo
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addExamenFisicoActions, dispatch)
});

AddExamenFisico.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExamenFisico);
