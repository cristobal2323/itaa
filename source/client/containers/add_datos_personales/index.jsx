import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/add_datos_personales/bread";
import Title from "../../components/add_datos_personales/title";
import Form from "../../components/add_datos_personales/form";

import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as addUserActions from "../../actions/add_user/index";

class AddDatosPersonales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        sexo: "Mujer",
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
    const permits = localStoreFN().getItem("permits");
    const permit = permits.includes("admin");
    if (permit) {
    } else {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.actions.resetAddUser();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.actions.saveUserApi(this.state.form);
  };

  /* Funcion handle change */
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    let container;
    container = (
      <div className="main-conatiner-box">
        <Bread />
        <Title />
        <Form
          form={this.state.form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.props.data}
          status={this.props.status}
          loading={this.props.loading}
        />
      </div>
    );

    return <section className="main-container">{container}</section>;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.add_user.data,
  loading: state.reducer.add_user.loading,
  status: state.reducer.add_user.status
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addUserActions, dispatch)
});

AddDatosPersonales.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDatosPersonales);
