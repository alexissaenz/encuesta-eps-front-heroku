<template>
  <section class="imageblock feature-large height-100">
    <div class="container pos-vertical-center">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Diligenciar Encuesta Covid</h2>

          <form v-on:submit.prevent="crearEncuesta">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <label>Sufrio Covid?:</label>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">Si</span>
                      <input
                        type="radio"
                        name="sufrio_covid"
                        value="si"
                        id="sufrio_covid-1"
                        v-model="sufrio_covid"
                        required
                      />
                      <label for="sufrio_covid-1"></label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">No</span>
                      <input
                        id="sufrio_covid-2"
                        type="radio"
                        name="sufrio_covid"
                        value="no"
                        v-model="sufrio_covid"
                        required
                      />
                      <label for="sufrio_covid-2"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <label
                      >Ha tenido contacto con alguna persona con Covid?:</label
                    >
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">Si</span>
                      <input
                        type="radio"
                        name="contacto_persona_covid"
                        value="si"
                        id="contacto_persona_covid-1"
                        v-model="contacto_persona_covid"
                        required
                      />
                      <label for="contacto_persona_covid-1"></label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">No</span>
                      <input
                        id="contacto_persona_covid-2"
                        type="radio"
                        name="contacto_persona_covid"
                        value="no"
                        v-model="contacto_persona_covid"
                        required
                      />
                      <label for="contacto_persona_covid-2"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <label>Ha tenido temperatura mayor a 37°?:</label>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">Si</span>
                      <input
                        type="radio"
                        name="temperatura_mayor_37"
                        value="si"
                        id="temperatura_mayor_37-1"
                        v-model="temperatura_mayor_37"
                        required
                      />
                      <label for="temperatura_mayor_37-1"></label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">No</span>
                      <input
                        id="temperatura_mayor_37-2"
                        type="radio"
                        name="temperatura_mayor_37"
                        value="no"
                        v-model="temperatura_mayor_37"
                        required
                      />
                      <label for="temperatura_mayor_37-2"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <label
                      >Ha tenido dificultad para respirar la ultima
                      semana?:</label
                    >
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">Si</span>
                      <input
                        type="radio"
                        name="dificultad_respirar_ult_sem"
                        value="si"
                        id="dificultad_respirar_ult_sem-1"
                        v-model="dificultad_respirar_ult_sem"
                        required
                      />
                      <label for="dificultad_respirar_ult_sem-1"></label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">No</span>
                      <input
                        id="dificultad_respirar_ult_sem-2"
                        type="radio"
                        name="dificultad_respirar_ult_sem"
                        value="no"
                        v-model="dificultad_respirar_ult_sem"
                        required
                      />
                      <label for="dificultad_respirar_ult_sem-2"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <label>Se ha sentido cansado la ultima semana?:</label>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">Si</span>
                      <input
                        type="radio"
                        name="cansado_ult_sem"
                        value="si"
                        id="cansado_ult_sem-1"
                        v-model="cansado_ult_sem"
                        required
                      />
                      <label for="cansado_ult_sem-1"></label>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="input-radio">
                      <span class="input__label">No</span>
                      <input
                        id="cansado_ult_sem-2"
                        type="radio"
                        name="cansado_ult_sem"
                        value="no"
                        v-model="cansado_ult_sem"
                        required
                      />
                      <label for="cansado_ult_sem-2"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn--primary type--uppercase">
                  Enviar Encuesta
                </button>
              </div>
            </div>
            <!--end row-->
          </form>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </section>
</template>
<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
  name: "Encuesta",
  data: function () {
    return {
      sufrio_covid: "",
      contacto_persona_covid: "",
      temperatura_mayor_37: "",
      dificultad_respirar_ult_sem: "",
      cansado_ult_sem: "",
      perfil: jwt_decode(
        localStorage.getItem("token_access")
      ).user_id.toString(),
    };
  },
  methods: {
    crearEncuesta: function (event) {
      let encuesta = {
        sufrio_covid: this.sufrio_covid == "si" ? true : false,
        contacto_persona_covid:
          this.contacto_persona_covid == "si" ? true : false,
        temperatura_mayor_37: this.temperatura_mayor_37 == "si" ? true : false,
        dificultad_respirar_ult_sem:
          this.dificultad_respirar_ult_sem == "si" ? true : false,
        cansado_ult_sem: this.cansado_ult_sem == "si" ? true : false,
        perfil: parseInt(this.perfil),
      };

      console.log(encuesta);

      axios
        .post(
          "https://encuesta-eps-app.herokuapp.com/encuesta/",
          encuesta,
          {
            headers: {},
          }
        )
        .then((result) => {
          alert("Encuesta creada exitosamente");
          localStorage.setItem("idUltEncuesta", result.data.id);
          event.target.reset();
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>