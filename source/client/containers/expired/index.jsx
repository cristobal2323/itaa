import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

/* Actions */
import * as loginActions from "../../actions/login/index";

class Expired extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogOut = async () => {
    await this.props.loginActions.logOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <div
        data-close="ok"
        onClick={this.handleLogOut}
        className="container-modal expired"
        tabIndex={0}
        role="button"
      >
        <div className={`box-modal max500`}>
          <a>
            <i
              data-close="ok"
              onClick={this.handleLogOut}
              className="fas fa-times-circle"
              tabIndex={0}
              role="button"
            />
          </a>
          <section className="module-title">
            <h2>Sesión expirada</h2>
          </section>
          <section className={"feed-back"}>
            <div>
              <i className="fas fa-frown" />
            </div>
            <div>
              <p>Su sesión ha caducado</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});
Expired.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expired);
