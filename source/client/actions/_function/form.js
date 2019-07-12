import React from "react";

const obj = {
  stautsForm: obj => {
    let container = "";
    if (obj.status === 401) {
      container = <p className="red">{obj.message401}</p>;
    } else if (obj.status !== 0) {
      if (obj.data.ejecucion.estado) {
        container = <p className="green">{obj.messageSuccess}</p>;
      } else {
        container = <p className="red">{obj.messageError}</p>;
      }
    }
    return container;
  }
};

export default obj;
