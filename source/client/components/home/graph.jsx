import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

let Plot;

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Plot = require("react-plotly.js");
    this.setState({ showMap: true });
  }

  render() {
    if (this.state.showMap) {
      if (!this.props.loading) {
        const fecha = [];
        const real = [];
        const prediccion = [];
        console.log(this.props.data);
        this.props.data.datos.valores.forEach(item => {
          fecha.push(item.fecha);
          real.push(item.valor_cierre_real);
          prediccion.push(item.valor_cierre_prediccion);
        });

        return (
          <div className="container-graph-home">
            <Plot
              data={[
                {
                  x: fecha,
                  y: real,
                  name: "Real",
                  type: "scatter",
                  mode: "lines+points",
                  marker: { color: "red" }
                },
                {
                  x: fecha,
                  y: prediccion,
                  name: "Predicción",
                  type: "scatter",
                  mode: "lines+points",
                  marker: { color: "orange" }
                }
              ]}
              layout={{
                title: "Valores",
                autosize: true
              }}
              useResizeHandler
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        );
      }
    }
    return <div className="container-graph-home" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Graph.propTypes = {};
