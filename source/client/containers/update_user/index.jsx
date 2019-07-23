import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/update_user/bread";
import Title from "../../components/update_user/title";
import Form from "../../components/update_user/form";

import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as updateUserActions from "../../actions/update_user/index";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        pass: "",
        passConfirm: "",
        id: ""
      }
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    const permits = localStoreFN().getItem("permits");
    const permit = permits.includes("admin");
    if (permit) {
      await this.props.actions.fetchGetUserApi({
        id: this.props.match.params.id
      });
    } else {
      this.props.history.push("/dashboard");
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data.ejecucion.estado) {
        const email = this.props.data.datos.email;
        const id = this.props.data.datos.id;
        this.setState({
          form: {
            ...this.state.form,
            email,
            id
          }
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetUpdateUser();
  }

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.actions.updateUserApi(this.state.form);
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
    if (this.props.status === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Form
            form={this.state.form}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.props.dataUpdate}
            status={this.props.statusUpdate}
            loading={this.props.loadingUpdate}
          />
        </div>
      );
    }

    return <section className="main-container">{container}</section>;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.update_user.data,
  loading: state.reducer.update_user.loading,
  status: state.reducer.update_user.status,
  dataUpdate: state.reducer.update_user.dataUpdate,
  loadingUpdate: state.reducer.update_user.loadingUpdate,
  statusUpdate: state.reducer.update_user.statusUpdate
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(updateUserActions, dispatch)
});

UpdateUser.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUser);
