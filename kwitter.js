//C93
//Agregamos la función que guardará el nombre en el localStorage
//también nos cambiará para pasar ahora a la siguiente pàgina
function addUser() {

  user_name = document.getElementById("user_name").value;

  if(user_name.length != 0 ){
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
  }else{
    alert("Ingresa un nombre válido")
  }
}

