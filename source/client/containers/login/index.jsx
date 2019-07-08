import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Logo from "../../../../public/images/logowh.png";

/* function */
import functionLogin from "../function/login";

/* Actions */
import * as loginactions from "../../actions/login/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Components */
import LoginForm from "../../components/login";
import Modal from "../../components/login/modal";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  /* Funcion Log IN */
  handleLogin = async event => {
    event.preventDefault();
    const obj = {
      email: document.getElementById("mail").value,
      pass: document.getElementById("pass").value
    };
    await this.props.actions.saveLoginApi(obj);
  };

  /* Modal Forget */
  handleModal = async event => {
    if (event.target.dataset.close === "ok") {
      let value;
      if (this.state.modal !== false) {
        value = false;
        this.setState({ modal: value });
      } else {
        value = true;
        this.setState({ modal: value });
      }
    }
  };

  /* Funcion Forget */
  handleForget = async event => {
    if (!this.props.loadingRegister) {
      event.preventDefault();
      const obj = {
        email: document.getElementById("forget").value
      };
      await this.props.actions.saveForgetApi(obj);
    }
  };

  /* Funciona dinámica para el módulo form */
  handleLog = event => {
    event.preventDefault();
    functionLogin.handleLog();
  };

  render() {
    let auth = localStoreFN().getItem("auth");
    auth = auth == "true";
    /* Validación log in */
    return auth ? (
      <Redirect to="/dashboard" />
    ) : (
      <section className="container-login">
        <LoginForm
          logo={Logo}
          dataRegister={this.props.dataRegister}
          statusRegister={this.props.statusRegister}
          loadingRegister={this.props.loadingRegister}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleLog={this.handleLog}
          message={this.props.message}
          handleModal={this.handleModal}
        />
        <Modal
          handleForget={this.handleForget}
          handleModal={this.handleModal}
          modal={this.state.modal}
          dataForget={this.props.dataForget}
          statusForget={this.props.statusForget}
          loadingForget={this.props.loadingForget}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.reducer.login.auth,
  message: state.reducer.login.message,
  token: state.reducer.login.token,
  dataRegister: state.reducer.login.dataRegister,
  loadingRegister: state.reducer.login.loadingRegister,
  statusRegister: state.reducer.login.statusRegister,
  dataForget: state.reducer.login.dataForget,
  loadingForget: state.reducer.login.loadingForget,
  statusForget: state.reducer.login.statusForget
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginactions, dispatch)
});

Login.propTypes = {
  message: PropTypes.bool.isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dataRegister: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  loadingForget: PropTypes.bool.isRequired,
  statusForget: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
