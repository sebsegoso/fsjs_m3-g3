// Crear función para calcular las horas trabajadas por jornada, en base a dos datos solicitados al usuario: fecha y hora de ingreso y fecha y hora de salida.
// - Una persona puede ingresar y salir el mismo día (diferencia de horas es hora salida – hora entrada)
// - Una persona puede ingresar un día y salir al siguiente (similar al anterior, pero con fecha/hora)
// - El dato de salida NO puede ser con 2 días de diferencia, esto es que haya trabajado más de
// 24 horas, por lo que se debe validar la segunda fecha y hora ingresada con respecto a la primera.
// La respuesta de esta función es un mensaje en pantalla que indique horas:minutos:segundos de permanencia.

export const horasTrabajadas = (entrada, salida) => {
  const fechaHoraEntrada = dayjs(entrada, "YYYY-MM-DD HH:mm:ss", true);
  const fechaHoraSalida = dayjs(salida, "YYYY-MM-DD HH:mm:ss", true);

  //Validar fecha
  if (!fechaHoraEntrada.isValid() || !fechaHoraSalida.isValid()) {
    return "Formato de fecha no valida";
  }

  //Validar diferencia es mayor a 24 horas
  const diferencia = fechaHoraSalida.diff(fechaHoraEntrada, "hour", true);
  if (diferencia > 24) {
    return "Trabajador no puede superar 24 horas de jornada";
  }

  //Diferencia de horas entre entrada y salida
  const duracionJornada = dayjs.duration(
    fechaHoraSalida.diff(fechaHoraEntrada)
  );
  const horas = duracionJornada.asHours();
  const minutos = duracionJornada.minutes();
  const segundos = duracionJornada.seconds();

  const mensaje = `Permanencia fue de ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  return mensaje;
};
