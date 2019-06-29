import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DatePicker from "react-datepicker";

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        id={this.props.id}
        className="date-icon"
        dateFormat="yyyy-MM-dd"
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Dates.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dates);
