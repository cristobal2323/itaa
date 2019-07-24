import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_datos_personales/bread";
import Title from "../../components/update_datos_personales/title";
import Form from "../../components/update_datos_personales/form";
import Spiner from "../../components/update_datos_personales/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateDatosPersonalesActions from "../../actions/update_datos_personales/index";
import * as addDatosPersonalesActions from "../../actions/add_datos_personales/index";

class UpdateDatosPersonales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        email: "",
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        sexo: "",
        rut: "",
        date: "",
        telefono: "",
        emailResponsable: "",
        comuna: "",
        region: "",
        provincia: "",
        direccion: "",
        profesion: "",
        escolaridad: "",
        estadoCivil: "",
        numeroHijos: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchGetDatosPersonalesApi({
      id: this.props.match.params.id
    });
    await this.props.addDatosPersonalesActions.fetchDatosPersonalesInfoApi({});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const email = this.props.data.datos.email;
        const id = this.props.data.datos.id;
        const nombres = this.props.data.datos.nombres;
        const apellidoPaterno = this.props.data.datos.apellido_paterno;
        const apellidoMaterno = this.props.data.datos.apellido_materno;
        const rut = this.props.data.datos.rut;
        const sexo = this.props.data.datos.sexo;
        const date = this.props.data.datos.fecha_nacimiento.substring(0, 10);
        const telefono = this.props.data.datos.telefono;
        const direccion = this.props.data.datos.direccion;
        const region = this.props.data.datos.region_id;
        const provincia = this.props.data.datos.provincia_id;
        const comuna = this.props.data.datos.comuna_id;
        const profesion = this.props.data.datos.profesion_oficio;
        const escolaridad = this.props.data.datos.escolaridad;
        const estadoCivil = this.props.data.datos.estado_civil;
        const numeroHijos = this.props.data.datos.numero_hijos;
        const emailResponsable = this.props.data.datos.responsable_email;
        this.setState({
          form: {
            ...this.state.form,
            email,
            id,
            nombres,
            apellidoPaterno,
            apellidoMaterno,
            rut,
            sexo,
            date,
            telefono,
            direccion,
            region,
            provincia,
            comuna,
            profesion,
            escolaridad,
            estadoCivil,
            numeroHijos,
            emailResponsable
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
      await this.props.addDatosPersonalesActions.fetchDatosPersonalesInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.addDatosPersonalesActions.fetchDatosPersonalesInfoApi({
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
  data: state.reducer.update_datos_personales.data,
  loading: state.reducer.update_datos_personales.loading,
  status: state.reducer.update_datos_personales.status,
  dataUpdate: state.reducer.update_datos_personales.dataUpdate,
  loadingUpdate: state.reducer.update_datos_personales.loadingUpdate,
  statusUpdate: state.reducer.update_datos_personales.statusUpdate,

  dataInfo: state.reducer.add_datos_personales.dataInfo,
  loadingInfo: state.reducer.add_datos_personales.loadingInfo,
  statusInfo: state.reducer.add_datos_personales.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addDatosPersonalesActions: bindActionCreators(
    addDatosPersonalesActions,
    dispatch
  ),
  actions: bindActionCreators(updateDatosPersonalesActions, dispatch)
});

UpdateDatosPersonales.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateDatosPersonales);
