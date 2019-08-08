import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_examen_fisico/bread";
import Title from "../../components/update_examen_fisico/title";
import Form from "../../components/update_examen_fisico/form";
import Spiner from "../../components/update_examen_fisico/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateExamenFisicoActions from "../../actions/update_examen_fisico/index";
import * as addExamenFisicoActions from "../../actions/add_examen_fisico/index";

class UpdateExamenFisico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombres: "",
        peso: "",
        talla: "",
        imc: "",
        malampati: "",
        calidadSueno: "",
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
    await this.props.actions.fetchGetExamenFisicoApi({
      id: this.props.match.params.id
    });
    await this.props.addExamenFisicoActions.fetchExamenFisicoInfoApi({});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const nombres = this.props.data.datos.nombres;
        const peso = this.props.data.datos.peso;
        const talla = this.props.data.datos.talla;
        const imc = this.props.data.datos.imc;
        const malampati = this.props.data.datos.malampati;
        const calidadSueno = this.props.data.datos.calidad_sueno_nombre;
        const cintura = this.props.data.datos.circunferencia_cintura;
        const cuello = this.props.data.datos.circunferencia_cuello;
        const presionArterial = this.props.data.datos
          .presion_arterial_sistolica;
        const presionArterialDiastolica = this.props.data.datos
          .presion_arterial_diastolica;
        const pulso = this.props.data.datos.pulso
          ? this.props.data.datos.pulso
          : "";
        const temperatura = this.props.data.datos.temperatura;
        const frecuenciaCardiaca = this.props.data.datos.frecuencia_cardiaca;
        const saturacionOxigeno = this.props.data.datos.saturacion_oxigeno;
        const tabaquismo = this.props.data.datos.tabaquismo;
        const medicamentos = this.props.data.datos.medicamentos;
        const roncador = this.props.data.datos.roncador;
        const hipertensionArterial = this.props.data.datos
          .hipertension_arterial;
        const diabetes = this.props.data.datos.diabetes;
        const enfermedadCardiacas = this.props.data.datos.enfermedad_cardiaca;
        const otroAntecedentes = this.props.data.datos.otro_antecedente_medico;
        this.setState({
          form: {
            ...this.state.form,
            nombres,
            peso,
            talla,
            imc,
            malampati,
            calidadSueno,
            cintura,
            cuello,
            presionArterial,
            presionArterialDiastolica,
            pulso,
            temperatura,
            frecuenciaCardiaca,
            saturacionOxigeno,
            tabaquismo,
            medicamentos,
            roncador,
            hipertensionArterial,
            diabetes,
            enfermedadCardiacas,
            otroAntecedentes
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
      await this.props.addExamenFisicoActions.fetchExamenFisicoInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.addExamenFisicoActions.fetchExamenFisicoInfoApi({
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
  data: state.reducer.update_examen_fisico.data,
  loading: state.reducer.update_examen_fisico.loading,
  status: state.reducer.update_examen_fisico.status,
  dataUpdate: state.reducer.update_examen_fisico.dataUpdate,
  loadingUpdate: state.reducer.update_examen_fisico.loadingUpdate,
  statusUpdate: state.reducer.update_examen_fisico.statusUpdate,

  dataInfo: state.reducer.add_examen_fisico.dataInfo,
  loadingInfo: state.reducer.add_examen_fisico.loadingInfo,
  statusInfo: state.reducer.add_examen_fisico.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addExamenFisicoActions: bindActionCreators(addExamenFisicoActions, dispatch),
  actions: bindActionCreators(updateExamenFisicoActions, dispatch)
});

UpdateExamenFisico.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateExamenFisico);
