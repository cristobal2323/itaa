import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="main-container">
        <div className="bread">
          <ul>
            <li>
              <a href="">
                <i className="fas fa-home" />
              </a>
            </li>
            <li>
              <a href="">Listado de usuarios</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

ListUser.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);
