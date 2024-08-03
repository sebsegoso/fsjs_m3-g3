// A partir de funciones de fecha se requiere que obtenga del usuario la fecha de nacimiento y se le despliegue mensajes (uno o varios) con:
// - El día que nació fue: miércoles (por ejemplo, para alguien que nace el 19-04-2023)
// - Su edad es: 99 años y 99 meses y 99 días (cambiando los números por el dato calculado por la función que desarrollará)
// - La cantidad de días que tiene son: 99999 días (días como número entero, sin decimales)
// - Para su próximo cumpleaños faltan: 999 días (si el número es cero, la persona está de cumpleaños y se debe poner mensaje “Felicidades está de cumpleaños”, en otro caso poner el número de días)
// - La hora en que ha realizado su consulta es: hh:mm:ss AM/PM (puede ser en formato 24 horas)


export const calcularFecha =  (nacimiento) => {
    //Formatear la fecha con day.js, usando varios formatos
    const fechaNacimiento = dayjs(nacimiento, 'YYYY-MM-DD', true);

    //Verificar si la fecha es válida
    if (!fechaNacimiento.isValid()) {
        return "Formato de fecha no valida"
    }

    //Dia de la semana en que nació
    const diaSemana = fechaNacimiento.format('dddd');
    
    //Edad en años, meses y dias
    const edad = dayjs().diff(fechaNacimiento, 'year');
    const meses = dayjs().diff(fechaNacimiento, 'month') % 12;
    const dias = dayjs().diff(fechaNacimiento, 'day') % 30;

    //Total de dias desde el nacimiento
    const diasVividos = dayjs().diff(fechaNacimiento, 'day');

    //proximo cumpleaños
    const proximoCumple = dayjs(fechaNacimiento).add(edad+1, 'year');
    const diasParaCumple = proximoCumple.diff(dayjs(), 'day');

    //mensaje de cumpleaños
    let mensaje;
    if (diasParaCumple === 0) {
        mensaje = "Felicidades estás de cumpleaños";
    } else {
        mensaje = `Faltan ${diasParaCumple} dias para tu cumpleaños`;
    }

    // Hora Actual
    const horaActual = dayjs().format('hh:mm:ss A');

    return `
        El dia en que naciste fue ${diaSemana}
        Tu edad es: ${edad} años, ${meses} meses y ${dias} dias
        Desde tu nacimiento han pasado ${diasVividos} dias
        ${mensaje}
        La hora actual es: ${horaActual}`;

}

