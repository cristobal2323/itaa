import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_oximetria/bread";
import Title from "../../components/update_oximetria/title";
import Form from "../../components/update_oximetria/form";
import Spiner from "../../components/update_oximetria/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateOximetriaActions from "../../actions/update_oximetria/index";
import * as addOximetriaActions from "../../actions/add_oximetria/index";

class UpdateOximetria extends Component {
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
    await this.props.actions.fetchGetOximetriaApi({
      id: this.props.match.params.id
    });
    await this.props.addOximetriaActions.fetchOximetriaInfoApi({});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const nombres = this.props.data.datos.nombres;
        const spo2Basal = this.props.data.datos.spo2_basal;
        const spo2Media = this.props.data.datos.spo2_media;
        const spo2Minima = this.props.data.datos.spo2_minima;
        const cantidadDesaturacion85 = this.props.data.datos
          .cantidad_desaturacion_85;
        const cantidadDesaturacion80 = this.props.data.datos
          .cantidad_desaturacion_80;
        const tiempoSpo285 = this.props.data.datos.tiempo_spo2_85;
        const desaturacionMasLarga = this.props.data.datos
          .desaturacion_mas_larga;
        const desaturacionMasGrande = this.props.data.datos
          .desaturacion_mas_grande;
        const desaturacionPromedio = this.props.data.datos
          .desaturacion_promedio;
        const desaturacionMasProfunda = this.props.data.datos
          .desaturacion_mas_profunda;
        const sumaDesaturaciones = this.props.data.datos.suma_desaturaciones;

        this.setState({
          form: {
            ...this.state.form,
            nombres,
            spo2Basal,
            spo2Media,
            spo2Minima,
            cantidadDesaturacion85,
            cantidadDesaturacion80,
            tiempoSpo285,
            desaturacionMasLarga,
            desaturacionMasGrande,
            desaturacionPromedio,
            desaturacionMasProfunda,
            sumaDesaturaciones
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
      await this.props.addOximetriaActions.fetchOximetriaInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.addOximetriaActions.fetchOximetriaInfoApi({
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
  data: state.reducer.update_oximetria.data,
  loading: state.reducer.update_oximetria.loading,
  status: state.reducer.update_oximetria.status,
  dataUpdate: state.reducer.update_oximetria.dataUpdate,
  loadingUpdate: state.reducer.update_oximetria.loadingUpdate,
  statusUpdate: state.reducer.update_oximetria.statusUpdate,

  dataInfo: state.reducer.add_oximetria.dataInfo,
  loadingInfo: state.reducer.add_oximetria.loadingInfo,
  statusInfo: state.reducer.add_oximetria.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addOximetriaActions: bindActionCreators(addOximetriaActions, dispatch),
  actions: bindActionCreators(updateOximetriaActions, dispatch)
});

UpdateOximetria.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateOximetria);
