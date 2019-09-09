import express from "express";
import bodyParser from "body-parser";

/* config */
import Config from "./controllers/config/index.js";

/* SSR */
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import cookieSession from "cookie-session";

/* dashboard */
import dashboardRoute from "./routes/dashboard/";

/* Home */
import homeRoute from "./routes/home/";

/* List user */
import listUserRoute from "./routes/user/";

/* datosPersonales */
import datosPersonalesRoute from "./routes/datos_personales/";

/* trabajadorEmpresa */
import trabajadorEmpresaRoute from "./routes/trabajador_empresa/";

/* examenMedico */
import examenMedicoRoute from "./routes/examen_medico/";

/* examenMedico */
import examenFisicoRoute from "./routes/examen_fisico/";

/* oximetria */
import oximetriaRoute from "./routes/oximetria/";

/* Polisomnografia */
import polisomnografiaRoute from "./routes/polisomnografia/";

/* Surveys epworth */
import surveysEpworthRoute from "./routes/surveys_epworth";

/* Login */
import loginRoute from "./routes/login/";
import localStoreRoute from "./routes/localStore/";

/* Components */
import store from "../client/store/store";
import Routes from "../router/Routes";
import Html from "../client/components/Html";

/* Session */

const app = express();

app.use(express.static("built/statics"));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["llave-1"]
  })
);
/* Epworth */
app.use("/api/epworth", surveysEpworthRoute.surveysEpworth);

/* Polisomnografia */
app.use("/api/poli", polisomnografiaRoute.polisomnografia);
app.use("/api/poliCount", polisomnografiaRoute.polisomnografiaCount);
app.use("/api/poliInfo", polisomnografiaRoute.polisomnografiaInfo);
app.use("/api/getpoli", polisomnografiaRoute.getPolisomnografia);

/* Oximetria*/
app.use("/api/oximetria", oximetriaRoute.oximetria);
app.use("/api/oximeCount", oximetriaRoute.oximetriaCount);
app.use("/api/oximeInfo", oximetriaRoute.oximetriaInfo);
app.use("/api/getoximetria", oximetriaRoute.getOximetria);

/* Examen fisico*/
app.use("/api/examenFisico", examenFisicoRoute.examenFisico);
app.use("/api/examenFisicoCount", examenFisicoRoute.examenFisicoCount);
app.use("/api/examenFisicoInfo", examenFisicoRoute.examenFisicoInfo);
app.use("/api/getexamenFisico", examenFisicoRoute.getExamenFisico);

/* Examen medico*/
app.use("/api/examenMedico", examenMedicoRoute.examenMedico);
app.use("/api/examenMedicoCount", examenMedicoRoute.examenMedicoCount);
app.use("/api/examenMedicoInfo", examenMedicoRoute.examenMedicoInfo);
app.use("/api/getexamenMedico", examenMedicoRoute.getExamenMedico);

/* Trabajador Empresa */
app.use("/api/trabajadorEmpresa", trabajadorEmpresaRoute.trabajadorEmpresa);
app.use(
  "/api/trabajadorEmpresaCount",
  trabajadorEmpresaRoute.trabajadorEmpresaCount
);
app.use(
  "/api/trabajadorEmpresaInfo",
  trabajadorEmpresaRoute.trabajadorEmpresaInfo
);
app.use(
  "/api/gettrabajadorEmpresa",
  trabajadorEmpresaRoute.getTrabajadorEmpresa
);

/* Datos personales */
app.use("/api/datosPersonales", datosPersonalesRoute.datosPersonales);
app.use("/api/datosPersonalesCount", datosPersonalesRoute.datosPersonalesCount);
app.use("/api/datosPersonalesInfo", datosPersonalesRoute.datosPersonalesInfo);
app.use("/api/getdatosPersonales", datosPersonalesRoute.getDatosPersonales);

/* List User */
app.use("/api/user", listUserRoute.user);
app.use("/api/getuser", listUserRoute.getUser);

/* Home */
app.use("/api/home", homeRoute.home);
app.use("/api/homeCount", homeRoute.homeCount);

/* Dashboard */
app.use("/api/dashboard", dashboardRoute.dashboard);

/* Login */
app.use("/api/login", loginRoute.login);
app.use("/api/register", loginRoute.loginRegister);
app.use("/api/forget", loginRoute.loginForget);
app.use("/api/localstore", localStoreRoute.localStore);

app.get("*", async (req, res, next) => {
  try {
    const context = {};
    const body = await renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    );

    const html = renderToStaticMarkup(<Html body={body} />);

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      res.send(`<!doctype ${html}`);
      res.end();
    }
  } catch (err) {
    next(err);
  }
});

const server = app.listen(Config.port, () => {
  const { address, port } = server.address();
  console.log(`Open server on address: ${address} and port: ${port}`);
});
