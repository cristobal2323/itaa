import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos examén fisico</h2>
      </article>
      <div>
        <label htmlFor="nombres">Nombres</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="nombres"
          id="nombres"
          value={props.form.nombres}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="peso"
          id="peso"
          value={props.form.peso}
        />
      </div>
      <div className="top">
        <label htmlFor="talla">Talla</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="talla"
          id="talla"
          value={props.form.talla}
        />
      </div>
      <div className="top">
        <label htmlFor="imc">IMC</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="imc"
          id="imc"
          value={props.form.imc}
        />
      </div>
      <div className="top">
        <label htmlFor="malampati">Malampati</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="malampati"
          id="malampati"
          value={props.form.malampati}
        />
      </div>
      <div className="top">
        <label htmlFor="calidad_sueno">Calidad de sueño</label>
        <select
          name="calidad_sueno"
          id="calidad_sueno"
          onChange={props.handleChange}
          value={props.form.calidad_sueno}
        >
          <option value="">Seleccione calidad del sueño</option>
          {props.data.sueno.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="cintura">Circunferencia cintura</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cintura"
          id="cintura"
          value={props.form.cintura}
        />
      </div>
      <div className="top">
        <label htmlFor="cintura">Circunferencia cuello</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cuello"
          id="cuello"
          value={props.form.cuello}
        />
      </div>
      <div className="top">
        <label htmlFor="presionArterial">Presion arterial sistolica</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="presionArterial"
          id="presionArterial"
          value={props.form.presionArterial}
        />
      </div>
      <div className="top">
        <label htmlFor="presionArterialDiastolica">
          Presion arterial diastolica
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="presionArterialDiastolica"
          id="presionArterialDiastolica"
          value={props.form.presionArterialDiastolica}
        />
      </div>
      <div className="top">
        <label htmlFor="pulso">Pulso</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="pulso"
          id="pulso"
          value={props.form.pulso}
        />
      </div>
      <div className="top">
        <label htmlFor="temperatura">Temperatura</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="temperatura"
          id="temperatura"
          value={props.form.temperatura}
        />
      </div>
      <div className="top">
        <label htmlFor="frecuenciaCardiaca">Frecuencia cardiaca</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="frecuenciaCardiaca"
          id="frecuenciaCardiaca"
          value={props.form.frecuenciaCardiaca}
        />
      </div>
      <div className="top">
        <label htmlFor="saturacionOxigeno">Saturación oxigeno</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="saturacionOxigeno"
          id="saturacionOxigeno"
          value={props.form.saturacionOxigeno}
        />
      </div>
      <div className="top">
        <label htmlFor="tabaquismo">Tabaquismo</label>
        <select
          name="tabaquismo"
          id="tabaquismo"
          onChange={props.handleChange}
          value={props.form.tabaquismo}
        >
          <option value="">Seleccione si es que fuma</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="medicamentos">Medicamentos</label>
        <select
          name="medicamentos"
          id="medicamentos"
          onChange={props.handleChange}
          value={props.form.medicamentos}
        >
          <option value="">Seleccione si toma medicamentos</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="roncador">Roncador</label>
        <select
          name="roncador"
          id="roncador"
          onChange={props.handleChange}
          value={props.form.roncador}
        >
          <option value="">Seleccione si es roncador</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="hipertensionArterial">Hipertension arterial</label>
        <select
          name="hipertensionArterial"
          id="hipertensionArterial"
          onChange={props.handleChange}
          value={props.form.hipertensionArterial}
        >
          <option value="">Seleccione hipertensión arterial</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="diabetes">Diabetes</label>
        <select
          name="diabetes"
          id="diabetes"
          onChange={props.handleChange}
          value={props.form.diabetes}
        >
          <option value="">Seleccione diabetes</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="enfermedadesCardiacas">Enfermedades cardiacas</label>
        <select
          name="enfermedadesCardiacas"
          id="enfermedadesCardiacas"
          onChange={props.handleChange}
          value={props.form.enfermedadesCardiacas}
        >
          <option value="">Seleccione enfermedad cardiaca</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="otroAntecedentes">Otros antecedentes</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="otroAntecedentes"
          id="otroAntecedentes"
          value={props.form.otroAntecedentes}
        />
      </div>
      <article className="button-form top">
        <div>
          {props.statusSave != 0 &&
            Fucform.stautsForm({
              status: props.statusSave,
              data: props.dataSave,
              message401: "No tiene los permisos necesarios.",
              messageSuccess:
                "   Se ha enviado un email al usuario con su user y contraseña.",
              messageError: "Error al ingresar el usuario."
            })}
        </div>
        <div>
          {props.loading ? (
            <article className="fa-1x box-form-button-spinner">
              <i className="fas fa-spinner fa-spin" />
            </article>
          ) : (
            <input type="submit" value="Ingresar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
