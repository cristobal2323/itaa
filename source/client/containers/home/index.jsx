import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* Actions */
import * as homeActions from "../../actions/home/index";

import Bread from "../../components/home/bread";
import Title from "../../components/home/title";
import Table from "../../components/home/table";
import Spiner from "../../components/home/spiner";
import Expired from "../expired/index";
import Paginator from "../../components/home/paginator";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginator: {
        start: 1,
        end: 30,
        main: 1,
        blockStart: 1,
        blockEnd: 10
      }
    };
  }
  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchHomeApi({
      pag: this.state.paginator
    });
    await this.props.actions.fetchHomeCountApi({});
  }

  componentWillUnmount() {
    this.props.actions.resetHome();
  }

  /* paginato */
  handlePaginator = async event => {
    const num = event.currentTarget.dataset.num;

    let valorPaginator = this.props.dataCount.datos.paginador.regxpagina * num;

    let start = valorPaginator + 1 - 30;
    let end = valorPaginator;

    let blockStart = this.state.paginator.blockStart;
    let blockEnd = this.state.paginator.blockEnd;

    if (blockStart == num) {
      if (num > 5) {
        blockStart = this.state.paginator.blockStart - 5;
        blockEnd = this.state.paginator.blockEnd - 5;
      }
    }
    if (blockEnd == num) {
      blockStart = this.state.paginator.blockStart + 5;
      blockEnd = this.state.paginator.blockEnd + 5;
    }

    await this.props.actions.fetchHomeApi({
      pag: {
        main: num,
        start,
        end,
        blockStart,
        blockEnd
      }
    });

    this.setState({
      paginator: {
        main: num,
        start,
        end,
        blockStart,
        blockEnd
      }
    });
  };

  render() {
    let container;
    if (this.props.status === 401 || this.props.statusCount === 401) {
      container = (
        <section className="main">
          <Expired history={this.props.history} />
        </section>
      );
    } else if (this.props.status === 200 && this.props.statusCount === 200) {
      container = (
        <div className="main-conatiner-box">
          <Bread />
          <Title />
          <Table data={this.props.data} />
          <Spiner loading={this.props.loading} />
          <Paginator
            handlePaginator={this.handlePaginator}
            paginator={this.state.paginator}
            data={this.props.dataCount}
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
  data: state.reducer.home.data,
  loading: state.reducer.home.loading,
  status: state.reducer.home.status,
  dataCount: state.reducer.home.dataCount,
  loadingCount: state.reducer.home.loadingCount,
  statusCount: state.reducer.home.statusCount
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(homeActions, dispatch)
});

Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
