import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Bread from "../../components/list_examen_medico/bread";
import Title from "../../components/list_examen_medico/title";
import Table from "../../components/list_examen_medico/table";
import Spiner from "../../components/list_examen_medico/spiner";
import Paginator from "../../components/list_examen_medico/paginator";
import Modal from "../../components/list_examen_medico/modalDelete";
import Expired from "../expired/index";

/* Local store */
import { localStoreFN } from "../../store/localStorage";

/* Actions */
import * as listExamenMedicoActions from "../../actions/list_examen_medico/index";

class ListExamenMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: null,
      num: null,
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
    await this.props.actions.fetchExamenMedicoApi({
      pag: this.state.paginator
    });
    await this.props.actions.fetchExamenMedicoCountApi({});
  }

  async componentWillUnmount() {
    this.props.actions.resetListExamenMedico();
  }

  handleModal = async event => {
    if (event.target.dataset.close === "ok") {
      let value;
      if (this.state.modal !== false) {
        value = false;
        const num = this.state.num;
        this.setState({ modal: value, id: null, num: null });
        if (this.props.statusDelete === 200) {
          await this.props.actions.fetchListDatosPersonalApi({});
        }
        this.props.actions.resetModalDatosPersonal();
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
    if (!this.props.loadingDelte) {
      event.preventDefault();
      const obj = {
        id: this.state.id
      };
      /* await this.props.actions.deleteExamenMedicoApi(obj); */
    }
  };

  /* paginato */
  handlePaginator = async event => {
    const num = event.currentTarget.dataset.num;
    let valorPaginator = this.props.dataCount.datos.paginador.regxpagina * num;

    let start = valorPaginator + 1;
    let end = valorPaginator + 30;

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

    await this.props.actions.fetchExamenMedicoApi({
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
          <Table handleModal={this.handleModal} data={this.props.data} />
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
  data: state.reducer.list_examen_medico.data,
  loading: state.reducer.list_examen_medico.loading,
  status: state.reducer.list_examen_medico.status,
  dataDelete: state.reducer.list_examen_medico.dataDelete,
  loadingDelete: state.reducer.list_examen_medico.loadingDelete,
  statusDelete: state.reducer.list_examen_medico.statusDelete,
  dataCount: state.reducer.list_examen_medico.dataCount,
  loadingCount: state.reducer.list_examen_medico.loadingCount,
  statusCount: state.reducer.list_examen_medico.statusCount
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(listExamenMedicoActions, dispatch)
});

ListExamenMedico.propTypes = {
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListExamenMedico);
