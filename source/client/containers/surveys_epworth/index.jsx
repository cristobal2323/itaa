import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Expired from "../expired/index";
import Bread from "../../components/surveys_epworth/bread";
import Title from "../../components/surveys_epworth/title";
import Spiner from "../../components/surveys_epworth/spiner";
import Form from "../../components/surveys_epworth/form";
import Modal from "../../components/surveys_epworth/modal";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as surveysEpworthActions from "../../actions/surveys_epworth/index";

class SurveysEpworth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        id_user: localStoreFN().getItem("id_user"),
        sentado_y_leyendo: "",
        viendo_la_tv: "",
        sentado_inactivo: "",
        como_copiloto: "",
        recostado_media_tarde: "",
        sentado_y_conversando: "",
        sentado_despues_comida: "",
        en_auto_cuando_para: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchSurveysEpworthApi({});
  }

  componentWillUnmount() {
    this.props.actions.resetSurveysEpworth();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.actions.saveSurveysEpworthApi(this.state.form);
    this.setState({
      modal: true
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
              id_user: localStoreFN().getItem("id_user"),
              sentado_y_leyendo: "",
              viendo_la_tv: "",
              sentado_inactivo: "",
              como_copiloto: "",
              recostado_media_tarde: "",
              sentado_y_conversando: "",
              sentado_despues_comida: "",
              en_auto_cuando_para: ""
            }
          });
        }
        this.props.actions.resetModalSurveysEpworth();
      } else {
        value = true;
        this.setState({
          modal: value
        });
      }
    }
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
    if (this.props.status === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.status === 200) {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Form
            handleChange={this.handleChange}
            form={this.state.form}
            dataSave={0}
            statusSave={false}
            data={this.props.data}
            handleSubmit={this.handleSubmit}
            loading={this.props.loadingSave}
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
  data: state.reducer.surveys_epworth.data,
  loading: state.reducer.surveys_epworth.loading,
  status: state.reducer.surveys_epworth.status,
  dataSave: state.reducer.surveys_epworth.dataSave,
  loadingSave: state.reducer.surveys_epworth.loadingSave,
  statusSave: state.reducer.surveys_epworth.statusSave
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(surveysEpworthActions, dispatch)
});

SurveysEpworth.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveysEpworth);
