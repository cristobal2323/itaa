import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_examen_medico/bread";
import Title from "../../components/update_examen_medico/title";
import Form from "../../components/update_examen_medico/form";
import Spiner from "../../components/update_examen_medico/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateExamenMedicoActions from "../../actions/update_examen_medico/index";
import * as addExamenMedicoActions from "../../actions/add_examen_medico/index";

class UpdateExamenMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        nombres: "",
        colesterolTotal: "",
        colesterolIdl: "",
        colesterolHdl: "",
        colesterolVldl: "",
        triglicerido: "",
        glicemia: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchGetExamenMedicoApi({
      id: this.props.match.params.id
    });
    await this.props.addExamenMedicoActions.fetchExamenMedicoInfoApi({});
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const nombres = this.props.data.datos.nombres;
        const colesterolTotal = this.props.data.datos.colesterol_total;
        const colesterolIdl = this.props.data.datos.colesterol_idl;
        const colesterolHdl = this.props.data.datos.colesterol_hdl;
        const colesterolVldl = this.props.data.datos.colesterol_vldl;
        const triglicerido = this.props.data.datos.triglicerido;
        const glicemia = this.props.data.datos.glicemia;

        this.setState({
          form: {
            ...this.state.form,
            nombres,
            colesterolTotal,
            colesterolIdl,
            colesterolHdl,
            colesterolVldl,
            triglicerido,
            glicemia
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
      await this.props.addExamenMedicoActions.fetchExamenMedicoInfoApi({
        region: e.target.value
      });
    } else if (e.target.name == "provincia") {
      await this.props.addExamenMedicoActions.fetchExamenMedicoInfoApi({
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
  data: state.reducer.update_examen_medico.data,
  loading: state.reducer.update_examen_medico.loading,
  status: state.reducer.update_examen_medico.status,
  dataUpdate: state.reducer.update_examen_medico.dataUpdate,
  loadingUpdate: state.reducer.update_examen_medico.loadingUpdate,
  statusUpdate: state.reducer.update_examen_medico.statusUpdate,

  dataInfo: state.reducer.add_examen_medico.dataInfo,
  loadingInfo: state.reducer.add_examen_medico.loadingInfo,
  statusInfo: state.reducer.add_examen_medico.statusInfo
});

const mapDispatchToProps = dispatch => ({
  addExamenMedicoActions: bindActionCreators(addExamenMedicoActions, dispatch),
  actions: bindActionCreators(updateExamenMedicoActions, dispatch)
});

UpdateExamenMedico.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateExamenMedico);
