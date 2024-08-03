import { calcularFecha } from "./ejercicio1.js";
import { calcularDiferencia } from "./ejercicio2.js";
import { horasTrabajadas } from "./ejercicio3.js";
import { CANTIDAD_TRABAJADORES, horasTrabajadores } from "./ejercicio4.js";
import { inputsTrabajadores, runExercise } from "./utils.js";
// dayjs
dayjs.locale("es");
dayjs.extend(dayjs_plugin_duration);
dayjs.extend(dayjs_plugin_relativeTime);
// creacion de inputs para ejercicio 4
inputsTrabajadores(CANTIDAD_TRABAJADORES, "trabajadoresX8Container");

// a los input de tipo date, se les da como max fecha hoy
const nowDate = dayjs().format("YYYY-MM-DD");
const nowDateTime = dayjs().format("YYYY-MM-DDThh:mm");

document
  .querySelectorAll("input[type='date']")
  .forEach((input) => (input.max = nowDate));
document
  .querySelectorAll("input[type='datetime-local']")
  .forEach((input) => (input.max = nowDateTime));
// elementos con atributo data-now se les aplica valor por defecto como ahora (especial para horarios de salida)
document
  .querySelectorAll('[data-now="date"]')
  .forEach((input) => (input.value = nowDate));
document
  .querySelectorAll('[data-now="datetime"]')
  .forEach((input) => (input.value = nowDateTime));

//   ejercicio 1
runExercise({
  btnId: "btnNacimiento",
  inputIds: ["nacimiento"],
  callback: calcularFecha,
  resultadoId: "nacimientoResultado",
});

//   ejercicio 2
runExercise({
  btnId: "btnPosterior",
  inputIds: ["fechaIngreso", "fechaPosterior"],
  callback: calcularDiferencia,
  resultadoId: "resultadoPermanencia",
});

//   ejercicio 3
runExercise({
  btnId: "btnFechaHora",
  inputIds: ["fechaHoraEntrada", "fechaHoraSalida"],
  callback: horasTrabajadas,
  resultadoId: "fechaHoraResultado",
});

//   ejercicio 4

runExercise({
  btnId: "btnTrabajadoresX8",
  callback: () => horasTrabajadores(),
  resultadoId: "trabajadoresX8Resultado",
});
