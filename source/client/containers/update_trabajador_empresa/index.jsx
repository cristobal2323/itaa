import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_trabajador_empresa/bread";
import Title from "../../components/update_trabajador_empresa/title";
import Form from "../../components/update_trabajador_empresa/form";
import Spiner from "../../components/update_trabajador_empresa/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateTrabajadorEmpresaActions from "../../actions/update_trabajador_empresa/index";
import * as addTrabajadorEmpresaActions from "../../actions/add_trabajador_empresa/index";

class UpdateTrabajadorEmpresa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nombres: "",
        NombreEmpresa: "",
        rubro: "",
        cargo: "",
        turno: "",
        estructura: "",
        capacitaciones: "",
        horario: "",
        antiguedad: "",
        faena: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchGetTrabajadorEmpresaApi({
      id: this.props.match.params.id
    });
    await this.props.addTrabajadorEmpresaActions.fetchTrabajadorEmpresaInfoApi(
      {}
    );
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const nombres = this.props.data.datos.trabajador_nombres;
        const nombreEmpresa = this.props.data.datos.empresa_nombre;
        const rubro = this.props.data.datos.rubro_nombre;
        const cargo = this.props.data.datos.cargo_nombre;
        const area = this.props.data.datos.area_nombre;
        const estructura = this.props.data.datos.estructura_turno_nombre;
        const turno = this.props.data.datos.tipo_turno_nombre;
        const capacitaciones = this.props.data.datos.capacitaciones;
        const horario = this.props.data.datos.horario_id;
        const antiguedad = this.props.data.datos.antiguedad_empresa;
        const faena = this.props.data.datos.permanece_faena_glosa;
        this.setState({
          form: {
            ...this.state.form,
            nombres,
            nombreEmpresa,
            rubro,
            cargo,
            area,
            estructura,
            turno,
            capacitaciones,
            horario,
            antiguedad,
            faena
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
      await this.props.addTrabajadorEmpresaActions.fetchTrabajadorEmpresaInfoApi(
        {
          region: e.target.value
        }
      );
    } else if (e.target.name == "provincia") {
      await this.props.addTrabajadorEmpresaActions.fetchTrabajadorEmpresaInfoApi(
        {
          region: document.getElementById("region").value,
          provincia: e.target.value
        }
      );
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
  data: state.reducer.update_trabajador_empresa.data,
  loading: state.reducer.update_trabajador_empresa.loading,
  status: state.reducer.update_trabajador_empresa.status,
  dataUpdate: state.reducer.update_trabajador_empresa.dataUpdate,
  loadingUpdate: state.reducer.update_trabajador_empresa.loadingUpdate,
  statusUpdate: state.reducer.update_trabajador_empresa.statusUpdate,

  dataInfo: state.reducer.add_trabajador_empresa.dataInfo,
  loadingInfo: state.reducer.add_trabajador_empresa.loadingInfo,
  statusInfo: state.reducer.add_trabajador_empresa.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addTrabajadorEmpresaActions: bindActionCreators(
    addTrabajadorEmpresaActions,
    dispatch
  ),
  actions: bindActionCreators(updateTrabajadorEmpresaActions, dispatch)
});

UpdateTrabajadorEmpresa.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTrabajadorEmpresa);
