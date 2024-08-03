// Crear una función que obtenga con un ciclo la cantidad de horas que han permanecido los 8 trabajadores de la empresa y entregue la suma total de horas trabajadas.
// - Una persona debe trabajar desde 4 horas y cero minutos en adelante (validarlo)
// - Una persona no puede trabajar sobre 12 horas y cero minutos (validarlo)
// La respuesta de esta función es un mensaje en pantalla que indique las horas y minutos totales trabajados por los 8 colaboradores.

export const CANTIDAD_TRABAJADORES = 8;
const getTrabajadores = (numeroTrabajadores) => {
  const trabajadores = [];
  for (let i = 1; i <= numeroTrabajadores; i++) {
    const entradaTrabajador = document.getElementById(`fechaHoraEntrada-${i}`);
    const salidaTrabajador = document.getElementById(`fechaHoraSalida-${i}`);

    trabajadores.push({
      entrada: entradaTrabajador.value,
      salida: salidaTrabajador.value,
    });
  }

  return trabajadores;
};

export const horasTrabajadores = () => {
  const trabajadores = getTrabajadores(CANTIDAD_TRABAJADORES);

  const minHoras = 4;
  const maxHoras = 12;
  let totalHoras = 0;
  let totalMinutos = 0;

  for (const trabajador of trabajadores) {
    const { entrada, salida } = trabajador;

    const fechaHoraEntrada = dayjs(entrada, "YYYY-MM-DD HH:mm:ss", true);
    const fechaHoraSalida = dayjs(salida, "YYYY-MM-DD HH:mm:ss", true);

    //Validar fecha
    if (!fechaHoraEntrada.isValid() || !fechaHoraSalida.isValid()) {
      return "Formato de fecha no valida";
    }

    //Diferencia de horas entre entrada y salida
    const duracion = dayjs.duration(fechaHoraSalida.diff(fechaHoraEntrada));
    const horas = duracion.asHours();

    //Validar horas trabajadas
    if (horas < minHoras || horas > maxHoras) {
      return `Las horas trabajadas deben estar entre 4 y 12`;
    }
    totalHoras += duracion.hours();
    totalMinutos += duracion.minutes();
  }

  totalHoras += Math.floor(totalMinutos / 60);
  totalMinutos = totalMinutos % 60;

  return `Horas totales de los ${CANTIDAD_TRABAJADORES} trabajadores: ${totalHoras} horas y ${totalMinutos} minutos`;
};
