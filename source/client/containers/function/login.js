const obj = {
  handleLog: obj => {
    if (!document.getElementById("text-login--a").classList.contains("slide")) {
      if (!document.getElementById("background").classList.contains("slide")) {
        document.getElementById("background").classList.add("slide");
        document.getElementById("box-login--a").classList.add("slide");
        document.getElementById("box-login--b").classList.add("slide");
        document.getElementById("text-login--a").classList.add("slide");
        setTimeout(() => {
          document.getElementById("title-login--text").innerHTML =
            "Inicia sesión";
          document.getElementById("down-login--text").innerHTML =
            "Ingresa a nuestra plataforma dataOn";

          document.getElementById("text-login--a").classList.remove("slide");
          document.getElementById("background").classList.remove("slideinit");
          document.getElementById("background").classList.add("slideleft");
          document.getElementById("box-login--a").classList.add("slideleft");
          document.getElementById("box-login--b").classList.add("slideleft");
        }, 1100);
      } else {
        document.getElementById("background").classList.remove("slide");
        document.getElementById("background").classList.add("slideinit");
        document.getElementById("box-login--a").classList.remove("slide");
        document.getElementById("box-login--a").classList.add("slideinit");
        document.getElementById("box-login--b").classList.remove("slide");
        document.getElementById("box-login--b").classList.add("slideinit");
        document.getElementById("text-login--a").classList.add("slide");
        setTimeout(() => {
          document.getElementById("title-login--text").innerHTML = "Registrate";
          document.getElementById("down-login--text").innerHTML =
            "Se parte de este excelente emprendimiento";
          document.getElementById("text-login--a").classList.remove("slide");
          document.getElementById("background").classList.remove("slideinit");
          document.getElementById("background").classList.remove("slideleft");
          document.getElementById("box-login--a").classList.remove("slideinit");
          document.getElementById("box-login--a").classList.remove("slideleft");
          document.getElementById("box-login--b").classList.remove("slideinit");
          document.getElementById("box-login--b").classList.remove("slideleft");
        }, 1100);
      }
    }
  }
};

export default obj;
