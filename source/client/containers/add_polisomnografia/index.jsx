import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/add_polisomnografia/bread";
import Title from "../../components/add_polisomnografia/title";
import Form from "../../components/add_polisomnografia/form";
import Spiner from "../../components/add_polisomnografia/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as addPolisomnografiaActions from "../../actions/add_polisomnografia/index";

class AddPolisomnografia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombres: "",
        eficienciaSueno: "",
        latenciaSueno: "",
        latenciaSuenoRem: "",
        latenciaSuenoFase1: "",
        latenciaSuenoFase2: "",
        latenciaSuenoFase3: "",
        porcentajeSuenoFase1: "",
        porcentajeSuenoFase2: "",
        porcentajeSuenoFase3: "",
        porcentajeSuenoRem: "",
        tiempoTotalSueno: "",
        tiempoEnCamas: "",
        cantidadApneaCentral: "",
        cantidadApneaObstructiva: "",
        cantidadApneaMixta: "",
        cantidadHipopnea: "",
        cantidadRera: "",
        maximaDuracionApnea: "",
        maximaDuracionHipopnea: "",
        indiceApneaHipopnea: "",
        iahRem: "",
        iahNoRem: "",
        ronquidos: "",
        ronquidosGlosa: "",
        frecuenciaCardiacaPromedio: "",
        frecuenciaCardiacaMaxima: "",
        cheyneStokes: "",
        spo2Basal: "",
        spo2Minima: "",
        indiceEventosRespiratorios: "",
        tiempoVigilia: "",
        tiempoRem: "",
        tiempoFase1: "",
        tiempoFase2: "",
        tiempoFase3: "",
        fecha: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchPolisomnografiaInfoApi({});
  }

  componentWillUnmount() {
    this.props.actions.resetAddPolisomnografia();
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
      await this.props.actions.fetchPolisomnografiaInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.actions.fetchPolisomnografiaInfoApi({
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
  dataInfo: state.reducer.add_polisomnografia.dataInfo,
  loadingInfo: state.reducer.add_polisomnografia.loadingInfo,
  statusInfo: state.reducer.add_polisomnografia.statusInfo
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addPolisomnografiaActions, dispatch)
});

AddPolisomnografia.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPolisomnografia);
