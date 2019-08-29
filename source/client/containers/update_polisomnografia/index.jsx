import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_polisomnografia/bread";
import Title from "../../components/update_polisomnografia/title";
import Form from "../../components/update_polisomnografia/form";
import Spiner from "../../components/update_polisomnografia/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updatePolisomnografiaActions from "../../actions/update_polisomnografia/index";
import * as addPolisomnografiaActions from "../../actions/add_polisomnografia/index";

class UpdatePolisomnografia extends Component {
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
    await this.props.actions.fetchGetPolisomnografiaApi({
      id: this.props.match.params.id
    });
    await this.props.addPolisomnografiaActions.fetchPolisomnografiaInfoApi({});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const nombres = this.props.data.datos.nombres;
        const eficienciaSueno = this.props.data.datos.eficiencia_sueno;
        const latenciaSueno = this.props.data.datos.latencia_sueno;
        const latenciaSuenoRem = this.props.data.datos.latencia_sueno_rem;
        const latenciaSuenoFase1 = this.props.data.datos.latencia_sueno_fase1;
        const latenciaSuenoFase2 = this.props.data.datos.latencia_sueno_fase2;
        const latenciaSuenoFase3 = this.props.data.datos.latencia_sueno_fase3;
        const porcentajeSuenoRem = this.props.data.datos.porcentaje_sueno_rem;

        const porcentajeSuenoFase1 = this.props.data.datos
          .porcentaje_sueno_fase1;
        const porcentajeSuenoFase2 = this.props.data.datos
          .porcentaje_sueno_fase2;
        const porcentajeSuenoFase3 = this.props.data.datos
          .porcentaje_sueno_fase3;
        const tiempoTotalSueno = this.props.data.datos.tiempo_total_sueno;
        const tiempoEnCamas = this.props.data.datos.tiempo_en_cama;

        const cantidadApneaCentral = this.props.data.datos
          .cantidad_apnea_central;

        const cantidadApneaObstructiva = this.props.data.datos
          .cantidad_apnea_obstructiva;
        const cantidadApneaMixta = this.props.data.datos.cantidad_apnea_mixta;
        const cantidadHipopnea = this.props.data.datos.cantidad_hipopnea;
        const cantidadRera = this.props.data.datos.cantidad_rera;
        const maximaDuracionApnea = this.props.data.datos.maxima_duracion_apnea;
        const maximaDuracionHipopnea = this.props.data.datos
          .maxima_duracion_hipopnea;
        const indiceApneaHipopnea = this.props.data.datos.indice_apnea_hipopnea;
        const iahRem = this.props.data.datos.iah_rem;
        const iahNoRem = this.props.data.datos.iah_no_rem;
        const ronquidos = this.props.data.datos.ronquidos;
        const frecuenciaCardiacaPromedio = this.props.data.datos
          .frecuencia_cardiaca_promedio;
        const frecuenciaCardiacaMaxima = this.props.data.datos
          .frecuencia_cardiaca_maxima;
        const cheyneStokes = this.props.data.datos.cheyne_stokes;
        const spo2Basal = this.props.data.datos.spo2_basal;
        const spo2Minima = this.props.data.datos.spo2_minima;
        const indiceEventosRespiratorios = this.props.data.datos
          .indice_eventos_respiratorios;
        const tiempoVigilia = this.props.data.datos.tiempo_vigilia;
        const tiempoRem = this.props.data.datos.tiempo_rem;
        const tiempoFase1 = this.props.data.datos.tiempo_fase1;
        const tiempoFase2 = this.props.data.datos.tiempo_fase2;
        const tiempoFase3 = this.props.data.datos.tiempo_fase3;
        const fecha = this.props.data.datos.fecha.substring(0, 10);

        this.setState({
          form: {
            ...this.state.form,
            nombres,
            eficienciaSueno,
            latenciaSueno,
            latenciaSuenoRem,
            latenciaSuenoFase1,
            latenciaSuenoFase2,
            latenciaSuenoFase3,
            porcentajeSuenoFase1,
            porcentajeSuenoFase2,
            porcentajeSuenoFase3,
            porcentajeSuenoRem,
            tiempoTotalSueno,
            tiempoEnCamas,
            cantidadApneaCentral,
            cantidadApneaObstructiva,
            cantidadApneaMixta,
            cantidadHipopnea,
            cantidadRera,
            maximaDuracionApnea,
            maximaDuracionHipopnea,
            indiceApneaHipopnea,
            iahRem,
            iahNoRem,
            ronquidos,
            frecuenciaCardiacaPromedio,
            frecuenciaCardiacaMaxima,
            cheyneStokes,
            spo2Basal,
            spo2Minima,
            indiceEventosRespiratorios,
            tiempoVigilia,
            tiempoRem,
            tiempoFase1,
            tiempoFase2,
            tiempoFase3,
            fecha
          }
        });
      }
    }
  }

  componentWillUnmount() {}

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
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
      await this.props.addPolisomnografiaActions.fetchPolisomnografiaInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.addPolisomnografiaActions.fetchPolisomnografiaInfoApi({
        region: document.getElementById("region").value,
        provincia: e.target.value
      });
    }
  };

  render() {
    let container;
    if (this.props.statusInfo === 401 || this.props.status === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.statusInfo === 200 && this.props.status === 200) {
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
  data: state.reducer.update_polisomnografia.data,
  loading: state.reducer.update_polisomnografia.loading,
  status: state.reducer.update_polisomnografia.status,
  dataUpdate: state.reducer.update_polisomnografia.dataUpdate,
  loadingUpdate: state.reducer.update_polisomnografia.loadingUpdate,
  statusUpdate: state.reducer.update_polisomnografia.statusUpdate,

  dataInfo: state.reducer.add_polisomnografia.dataInfo,
  loadingInfo: state.reducer.add_polisomnografia.loadingInfo,
  statusInfo: state.reducer.add_polisomnografia.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addPolisomnografiaActions: bindActionCreators(
    addPolisomnografiaActions,
    dispatch
  ),
  actions: bindActionCreators(updatePolisomnografiaActions, dispatch)
});

UpdatePolisomnografia.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePolisomnografia);
