import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos polisomnografia</h2>
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
        <label htmlFor="eficienciaSueno">Eficiencia sueno</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="eficienciaSueno"
          id=" eficienciaSueno"
          value={props.form.eficienciaSueno}
        />
      </div>
      <div className="top">
        <label htmlFor="latenciaSueno">Latencia sueño</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="latenciaSueno"
          id="latenciaSueno"
          value={props.form.latenciaSueno}
        />
      </div>
      <div className="top">
        <label htmlFor=" latenciaSuenoRem">Latencia sueño rem</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="latenciaSuenoRem"
          id="latenciaSuenoRem"
          value={props.form.latenciaSuenoRem}
        />
      </div>
      <div className="top">
        <label htmlFor="latenciaSuenoFase1">Latencia sueño fase 1</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="latenciaSuenoFase1"
          id="latenciaSuenoFase1"
          value={props.form.latenciaSuenoFase1}
        />
      </div>
      <div className="top">
        <label htmlFor="latenciaSuenoFase2">Latencia sueño fase 2</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="latenciaSuenoFase2"
          id="latenciaSuenoFase2"
          value={props.form.latenciaSuenoFase2}
        />
      </div>
      <div className="top">
        <label htmlFor="latenciaSuenoFase3">Latencia sueño fase 3</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="latenciaSuenoFase3"
          id="latenciaSuenoFase3"
          value={props.form.latenciaSuenoFase3}
        />
      </div>
      <div className="top">
        <label htmlFor="porcentajeSuenoFase1">Porcentaje sueño fase 1</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="porcentajeSuenoFase1"
          id="porcentajeSuenoFase1"
          value={props.form.porcentajeSuenoFase1}
        />
      </div>
      <div className="top">
        <label htmlFor="porcentajeSuenoFase2">Porcentaje sueño fase 2</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="porcentajeSuenoFase2"
          id="porcentajeSuenoFase2"
          value={props.form.porcentajeSuenoFase2}
        />
      </div>
      <div className="top">
        <label htmlFor="porcentajeSuenoFase3">Porcentaje sueño fase 3</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="porcentajeSuenoFase3"
          id="porcentajeSuenoFase3"
          value={props.form.porcentajeSuenoFase3}
        />
      </div>
      <div className="top">
        <label htmlFor="porcentajeSuenoRem">Porcentaje sueño rem</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="porcentajeSuenoRem"
          id="porcentajeSuenoRem"
          value={props.form.porcentajeSuenoRem}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoTotalSueno">Tiempo total sueno</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoTotalSueno"
          id="tiempoTotalSueno"
          value={props.form.tiempoTotalSueno}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoEnCamas">Tiempo en camas</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoEnCamas"
          id="tiempoEnCamas"
          value={props.form.tiempoEnCamas}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadApneaCentral">Cantidad apnea central</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadApneaCentral"
          id="cantidadApneaCentral"
          value={props.form.cantidadApneaCentral}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadApneaObstructiva">
          Cantidad apnea obstructiva
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadApneaObstructiva"
          id="cantidadApneaObstructiva"
          value={props.form.cantidadApneaObstructiva}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadApneaMixta">Cantidad apnea mixta</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadApneaMixta"
          id="cantidadApneaMixta"
          value={props.form.cantidadApneaMixta}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadHipopnea">Cantidad hipopnea</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadHipopnea"
          id="cantidadHipopnea"
          value={props.form.cantidadHipopnea}
        />
      </div>
      <div className="top">
        <label htmlFor="cantidadRera">Cantidad rera</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cantidadRera"
          id="cantidadRera"
          value={props.form.cantidadRera}
        />
      </div>
      <div className="top">
        <label htmlFor="maximaDuracionApnea">Maxima duracion apnea</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="maximaDuracionApnea"
          id="maximaDuracionApnea"
          value={props.form.maximaDuracionApnea}
        />
      </div>
      <div className="top">
        <label htmlFor="maximaDuracionHipopnea">Maxima duracion hipopnea</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="maximaDuracionHipopnea"
          id="maximaDuracionHipopnea"
          value={props.form.maximaDuracionHipopnea}
        />
      </div>
      <div className="top">
        <label htmlFor="indiceApneaHipopnea">Indice apnea hipopnea</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="indiceApneaHipopnea"
          id="indiceApneaHipopnea"
          value={props.form.indiceApneaHipopnea}
        />
      </div>
      <div className="top">
        <label htmlFor="iahRem">Iah rem</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="iahRem"
          id="iahRem"
          value={props.form.iahRem}
        />
      </div>
      <div className="top">
        <label htmlFor="iahNoRem">Iah no rem</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="iahNoRem"
          id="iahNoRem"
          value={props.form.iahNoRem}
        />
      </div>
      <div className="top">
        <label htmlFor="ronquidos">Ronquidos</label>
        <select
          name="ronquidos"
          id="ronquidos"
          onChange={props.handleChange}
          value={props.form.ronquidos}
        >
          <option value="">Seleccione si hay ronquido</option>
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>
      </div>
      <div className="top">
        <label htmlFor="frecuenciaCardiacaPromedio">
          Frecuencia cardiaca promedio
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="frecuenciaCardiacaPromedio"
          id="frecuenciaCardiacaPromedio"
          value={props.form.frecuenciaCardiacaPromedio}
        />
      </div>
      <div className="top">
        <label htmlFor="frecuenciaCardiacaMaxima">
          Frecuencia cardiaca maxima
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="frecuenciaCardiacaMaxima"
          id="frecuenciaCardiacaMaxima"
          value={props.form.frecuenciaCardiacaMaxima}
        />
      </div>
      <div className="top">
        <label htmlFor="cheyneStokes">Cheyne stokes</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="cheyneStokes"
          id="cheyneStokes"
          value={props.form.cheyneStokes}
        />
      </div>
      <div className="top">
        <label htmlFor="spo2Basal">Spo2 basal</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="spo2Basal"
          id="spo2Basal"
          value={props.form.spo2Basal}
        />
      </div>
      <div className="top">
        <label htmlFor="spo2Minima">Spo2 minima</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="spo2Minima"
          id="spo2Minima"
          value={props.form.spo2Minima}
        />
      </div>
      <div className="top">
        <label htmlFor="indiceEventosRespiratorios">
          Indice eventos respiratorios
        </label>
        <input
          onChange={props.handleChange}
          type="number"
          name="indiceEventosRespiratorios"
          id="indiceEventosRespiratorios"
          value={props.form.indiceEventosRespiratorios}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoVigilia">Tiempo vigilia</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoVigilia"
          id="tiempoVigilia"
          value={props.form.tiempoVigilia}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoRem">Tiempo rem</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoRem"
          id="tiempoRem"
          value={props.form.tiempoRem}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoFase1">Tiempo fase 1</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoFase1"
          id="tiempoFase1"
          value={props.form.tiempoFase1}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoFase2">Tiempo fase 2</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoFase2"
          id="tiempoFase2"
          value={props.form.tiempoFase2}
        />
      </div>
      <div className="top">
        <label htmlFor="tiempoFase3">Tiempo fase 3</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="tiempoFase3"
          id="tiempoFase3"
          value={props.form.tiempoFase3}
        />
      </div>
      <div className="top">
        <label htmlFor="date">Fecha</label>
        <input
          onChange={props.handleChange}
          type="date"
          name="date"
          id="date"
          value={props.form.date}
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
