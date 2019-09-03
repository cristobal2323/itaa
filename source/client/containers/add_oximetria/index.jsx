import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/add_oximetria/bread";
import Title from "../../components/add_oximetria/title";
import Form from "../../components/add_oximetria/form";
import Spiner from "../../components/add_oximetria/spiner";
import Expired from "../expired/index";
import Modal from "../../components/add_oximetria/modal";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as addOximetriaActions from "../../actions/add_oximetria/index";
import * as listDatosPersonalesActions from "../../actions/list_datos_personales/index";

class AddOximetria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      paginator: {
        start: 1,
        end: 1000
      },
      form: {
        id_responsable: localStoreFN().getItem("id_user"),
        id_user: "",
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
    await this.props.actionsDatosPersonales.fetchDatosPersonalesApi({
      pag: this.state.paginator
    });
  }

  componentWillUnmount() {
    this.props.actions.resetAddOximetria();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.actions.saveAddOximetriaApi(this.state.form);
    this.setState({
      modal: true
    });
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

  handleChangeAutoComplete = (valor, name, valorUser, nameUser) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: valor,
        [nameUser]: valorUser
      }
    });
  };

  handleModal = async event => {
    if (event.target.dataset.close === "ok") {
      let value;
      if (this.state.modal !== false) {
        value = false;
        this.setState({ modal: value });
        if (this.props.statusSave === 200) {
          this.setState({
            form: {
              id_responsable: localStoreFN().getItem("id_user"),
              id_user: "",
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
          });
        }
        this.props.actions.resetModalOximetria();
      } else {
        value = true;
        this.setState({
          modal: value
        });
      }
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
    } else if (
      this.props.statusInfo === 200 &&
      this.props.statusDatosPersonales === 200
    ) {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Form
            form={this.state.form}
            handleChange={this.handleChange}
            handleChangeAutoComplete={this.handleChangeAutoComplete}
            handleSubmit={this.handleSubmit}
            data={this.props.dataInfo}
            status={this.props.statusInfo}
            loading={this.props.loadingSave}
            dataSave={0}
            statusSave={false}
            persons={this.props.dataDatosPersonales}
          />
          <Modal
            data={this.props.dataSave}
            status={this.props.statusSave}
            loading={this.props.loadingSave}
            handleModal={this.handleModal}
            modal={this.state.modal}
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
  statusInfo: state.reducer.add_oximetria.statusInfo,

  dataSave: state.reducer.add_oximetria.dataSave,
  loadingSave: state.reducer.add_oximetria.loadingSave,
  statusSave: state.reducer.add_oximetria.statusSave,

  dataDatosPersonales: state.reducer.list_datos_personales.data,
  loadingDatosPersonales: state.reducer.list_datos_personales.loading,
  statusDatosPersonales: state.reducer.list_datos_personales.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addOximetriaActions, dispatch),
  actionsDatosPersonales: bindActionCreators(
    listDatosPersonalesActions,
    dispatch
  )
});

AddOximetria.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOximetria);
