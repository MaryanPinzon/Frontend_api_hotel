export async function consultarHabitaciones() {
  //Tips para consumir un api
  //1. Para donde voy
  let url = "";
  let peticion = {
    method: "GET",
  };

  //2. Vaya pues
  let respuesta = await fetch(url, peticion);
  let habitaciones = respuesta.json();

  //3. Muestre que trajo
  return habitaciones;
}
