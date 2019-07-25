import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/list_user/bread";
import Title from "../../components/list_user/title";
import Table from "../../components/list_user/table";
import Spiner from "../../components/list_user/spiner";
import Modal from "../../components/list_user/modalDelete";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as listUserActions from "../../actions/list_user/index";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: null,
      num: null
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    const permits = localStoreFN().getItem("permits");
    const permit = permits.includes("admin");
    if (permit) {
      await this.props.actions.fetchListUserApi({});
    } else {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.actions.resetListUser();
  }

  handleModal = async event => {
    if (event.target.dataset.close === "ok") {
      let value;
      if (this.state.modal !== false) {
        value = false;
        const num = this.state.num;
        this.setState({ modal: value, id: null, num: null });
        if (this.props.statusDelete === 200) {
          await this.props.actions.fetchListUserApi({});
        }
        this.props.actions.resetModalUser();
      } else {
        value = true;
        this.setState({
          modal: value,
          id: event.target.dataset.id,
          num: event.target.dataset.num
        });
      }
    }
  };

  /* Funcion Delete */
  handleDelete = async event => {
    if (!this.props.loadingDelete) {
      event.preventDefault();
      const obj = {
        id: this.state.id
      };
      await this.props.actions.deleteUserApi(obj);
      await this.props.actions.fetchListUserApi({});
    }
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
          <Table handleModal={this.handleModal} data={this.props.data} />
          <Spiner loading={this.props.loading} />
          <Modal
            handleDelete={this.handleDelete}
            handleModal={this.handleModal}
            modal={this.state.modal}
            dataDelete={this.props.dataDelete}
            statusDelete={this.props.statusDelete}
            loadingDelete={this.props.loadingDelete}
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
  data: state.reducer.list_user.data,
  loading: state.reducer.list_user.loading,
  status: state.reducer.list_user.status,
  dataDelete: state.reducer.list_user.dataDelete,
  loadingDelete: state.reducer.list_user.loadingDelete,
  statusDelete: state.reducer.list_user.statusDelete
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(listUserActions, dispatch)
});

ListUser.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);
