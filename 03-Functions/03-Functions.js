function timeConversion(time) {
  // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
  // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
  //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas
  if (time === "") return false;
  if (time.includes("AM")) {
    let horario = time.slice(0, -2);
    let horas = horario.split(":");
    if (horas[1] >= 60) return false;
    if (horas[2] >= 60) return false;
    if (horas[2] === undefined) return false;
    if (horas[0] === "12") {
      return "00" + ":" + horas[1] + ":" + horas[2];
    } else {
      return horas[0] + ":" + horas[1] + ":" + horas[2];
    }
  } else if (time.includes("PM")) {
    let horario = time.slice(0, -2);
    let horas = horario.split(":");
    if (horas[0] > 23) return false;
    if (horas[1] >= 60) return false;
    if (horas[2] >= 60) return false;
    if (horas[2] === undefined) return false;
    if (horas[0] === "12") {
      return horas[0] + ":" + horas[1] + ":" + horas[2];
    } else {
      let hora = Number(horas[0]) + 12;
      horas[0] = hora.toString();
      return horas[0] + ":" + horas[1] + ":" + horas[2];
    }
  }
  /*let hour = parseInt(time.substring(0, 2));
    let meridiam = time.substring(8, 10);
    let time_24hours = "";

  if (meridiam==='PM') {
      hour = hour + 12;
      hour = hour.toString().padStart(2, "0");
      time_24hours = hour + time.substring(2, 8);
  }
  else if (meridiam==='AM'&&hour===12) {
      hour = 0;
      hour = hour.toString().padStart(2, "0");
      time_24hours = hour + time.substring(2, 8);
  } else {
      time_24hours = time.substring(0, 8);
  }
  
    return time_24hours;*/
}
module.exports = {
  timeConversion,
};
