import React, { Component } from "react";
import PropTypes from "prop-types";
import Autocomplete from "react-autocomplete";
import _ from "lodash";
import unorm from "unorm";

const wrapperStyle = {
  width: "100%"
};

const style = {
  color: "#687676",
  outline: "none",
  fontSize: "12px",
  width: "100%"
};

const styleMenu = isHighlighted => {
  return {
    color: isHighlighted ? "white" : "#687676",
    background: isHighlighted ? "#15aa8a" : "white",
    padding: "8px 5px",
    textAlign: "left"
  };
};

class AutocompleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter
    };
  }
  handleSelect = (value, arr) => {
    this.props.handleChangeAutoComplete(
      value,
      this.props.name,
      arr.user_id,
      "id_user"
    );
  };

  handleBlur = event => {
    if (this.props.id_user === "") {
      this.props.handleChangeAutoComplete("", this.props.name, "", "id_user");
      this.setState({
        filter: this.props.filter
      });
    }
  };

  handleChange = (e, value, arr) => {
    const alias = "nombres";
    const aliasTwo = "apellido_paterno";
    let fin = _.filter(this.props.filter, function(item) {
      const a = unorm
        .nfd(`${item[alias]} ${item[aliasTwo]}`)
        .toUpperCase()
        .replace(/[\u0300-\u036f]/g, "");
      const b = unorm
        .nfd(value)
        .toUpperCase()
        .replace(/[\u0300-\u036f]/g, "");
      return a.includes(b);
    });

    this.setState({
      filter: fin
    });
    this.props.handleChangeAutoComplete(value, this.props.name, "", "id_user");
  };

  render() {
    return (
      <Autocomplete
        inputProps={{
          "data-autocomplete": "complete",
          style,
          name: this.props.name,
          onBlur: this.handleBlur
        }}
        wrapperStyle={wrapperStyle}
        getItemValue={item => `${item.nombres} ${item.apellido_paterno}`}
        items={this.state.filter}
        renderItem={(item, isHighlighted) => (
          <div key={item.user_id} style={styleMenu(isHighlighted)}>
            {`${item.nombres} ${item.apellido_paterno}`}
          </div>
        )}
        value={this.props.value}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
      />
    );
  }
}
AutocompleteComponent.propTypes = {};

export default AutocompleteComponent;
