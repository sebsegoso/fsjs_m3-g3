export const inputsTrabajadores = (num = 1, containerId) => {
  const elementos = [];

  for (let i = 1; i <= num; i++) {
    const inputTrabajador = `
                <div class="d-flex align-items-center gap-3">
                  <h6 class="">${i} - </h6>
                  <div class="mb-3 d-flex align-content-center gap-4">
                      <div>
                        <label for="fechaHoraEntrada-${i}" class="form-label"
                          >Horario de ingreso </label
                        >
                        <input
                          type="datetime-local"
                          class="form-control"
                          id="fechaHoraEntrada-${i}"
                        />
                      </div>
                      <div>
                        <label for="fechaHoraSalida-${i}" class="form-label"
                          >Horario de salida</label
                        >
                        <input
                          type="datetime-local"
                          data-now="datetime"
                          class="form-control"
                          id="fechaHoraSalida-${i}"
                         />
                      </div>
                  </div>
                </div>
            `;

    elementos.push(inputTrabajador);
  }
  const container = document.getElementById(containerId);
  container.innerHTML = elementos.join("");
};

export const runExercise = ({
  btnId = "",
  inputIds = [],
  callback = () => {},
  resultadoId = "",
}) => {
  document.getElementById(btnId).addEventListener("click", function () {
    const inputValues = inputIds.map(
      (id) => document.getElementById(id)?.value
    );
    const datos = callback(...inputValues);

    const resultado = document.getElementById(resultadoId);
    if (!resultado) return datos;
    resultado.scrollIntoView({ block: "center", behavior: "smooth" });
    resultado.innerText = datos;
  });
};
