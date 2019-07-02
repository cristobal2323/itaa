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
        <div className="main-conatiner-box">
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
          <div className="title-table">
            <div>
              <h3>Usuarios</h3>
            </div>
            <div>
              <button>Agregar usuario</button>
            </div>
          </div>
          <div className="table top">
            <table>
              <thead>
                <tr>
                  <th className="th100">Número</th>
                  <th className="th220">Email</th>
                  <th>Permisos</th>
                  <th className="th100 center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>cri.maturana@gmail.com</td>
                  <td>
                    <ul>
                      <li>Admin</li>
                      <li>Transportista</li>
                    </ul>
                  </td>
                  <td>
                    {" "}
                    <div className="icon-table">
                      <a>
                        <i className="fas fa-trash-alt" />
                      </a>
                      <a>
                        <i className="fas fa-user-edit" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>data@gmail.com</td>
                  <td>
                    <ul>
                      <li>Trabajador</li>
                      <li>Ingresador</li>
                      <li>Transportista</li>
                    </ul>
                  </td>
                  <td>
                    <div className="icon-table">
                      <a>
                        <i className="fas fa-trash-alt" />
                      </a>
                      <a>
                        <i className="fas fa-user-edit" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>leonardo@gmail.com</td>
                  <td>
                    <ul>
                      <li>Gerente</li>
                      <li>Transportista</li>
                    </ul>
                  </td>
                  <td>
                    <div className="icon-table">
                      <a>
                        <i className="fas fa-trash-alt" />
                      </a>
                      <a>
                        <i className="fas fa-user-edit" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>maca@gmail.com</td>
                  <td>
                    <ul>
                      <li>Supervisor</li>
                    </ul>
                  </td>
                  <td>
                    <div className="icon-table">
                      <a>
                        <i className="fas fa-trash-alt" />
                      </a>
                      <a>
                        <i className="fas fa-user-edit" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
