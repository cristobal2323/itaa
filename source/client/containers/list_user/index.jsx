import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/list_user/bread";
import Title from "../../components/list_user/title";
import Table from "../../components/list_user/table";
import Spiner from "../../components/list_user/spiner";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as listUserActions from "../../actions/list_user/index";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <Table data={this.props.data} />
          <Spiner loading={this.props.loading} />
        </div>
      );
    }

    return <section className="main-container">{container}</section>;
  }
}

const mapStateToProps = state => ({
  data: state.reducer.list_user.data,
  loading: state.reducer.list_user.loading,
  status: state.reducer.list_user.status
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
