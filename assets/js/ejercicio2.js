// A partir de lo realizado en la parte a) crear una función que reciba dos parámetros de fecha (fecha
//     de ingreso a la organización y fecha posterior o más actual), con lo cual se pide entregar las
//     siguientes respuestas:
//     - Su permanencia en la organización es de: 999 días
//     - Su permanencia en la organización es de: 999 meses
//     - Su permanencia en la organización es de: 99 años y 99 meses y 99 días

//     - Para completar el año de permanencia faltan: 999 días

export const calcularDiferencia = function (fecha1Ingreso, fecha2Posterior) {
  const fechaIngreso = dayjs(fecha1Ingreso, 'YYYY-MM-DD');
  const fechaActual = fecha2Posterior ? dayjs(fecha2Posterior, 'YYYY-MM-DD') : dayjs();

  if (!fechaIngreso.isValid()) {
    return "La fecha de ingreso no es válida";
  } else if (!fechaActual.isValid()) {
    return "La fecha posterior no es válida";
  } else if (fechaIngreso.isAfter(fechaActual)) {
    return "La segunda fecha no puede ser anterior a la primera";
  }

  const diffAnios = fechaActual.diff(fechaIngreso, 'year');
  const diffMeses = fechaActual.diff(fechaIngreso.add(diffAnios, 'year'), 'month');
  const diffDias = fechaActual.diff(fechaIngreso.add(diffAnios, 'year').add(diffMeses, 'month'), 'day');

  const totalDias = fechaActual.diff(fechaIngreso, 'day');
  const totalMeses = fechaActual.diff(fechaIngreso, 'month');

  const fechaProximoAnio = fechaIngreso.add(diffAnios + 1, 'year');
  const diasParaAnio = fechaProximoAnio.diff(fechaActual, 'day');

  const mensaje = `
    Su permanencia en la organización es de: ${totalDias} días.
    Su permanencia en la organización es de: ${totalMeses} meses.
    Su permanencia en la organización es de: ${diffAnios} años y ${diffMeses} meses y ${diffDias} días.
    Para completar el próximo año de permanencia faltan: ${diasParaAnio} días.
  `;

  return mensaje;
};
