
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBCsbVncdVflv7b22vasQBlqXa2LQICHPs",
  authDomain: "kwitter123-68b8d.firebaseapp.com",
  databaseURL: "https://kwitter123-68b8d-default-rtdb.firebaseio.com",
  projectId: "kwitter123-68b8d",
  storageBucket: "kwitter123-68b8d.appspot.com",
  messagingSenderId: "964059203346",
  appId: "1:964059203346:web:eae3114c7c8d68e9b0d5cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//////////////////////
/////// C95 ////////



//guardamos en el local storage el nombre del usuario
  user_name = localStorage.getItem("user_name");

  //colocamos este nombre en un div vacio
document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";


//funcion para agregar una sala
function addRoom()
{
  //tomamos lo que escribio el usuario en el text input
  room_name = document.getElementById("room_name").value;
  //lo guardamos en firebase
  firebase.database().ref("/").child(room_name).update({
    //como proposito tendra: añadir sala
    purpose : "adding room name"
  });
    //guardamos la sala en el local storage
    localStorage.setItem("room_name", room_name);
    //abrimos la siguiente pagina
    window.location = "kwitter_page.html";
}


//para obtener los nombres de las salas de firebase
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      
      //creamos una variable donde se guardaran todos los nombres de las salas
      Room_names = childKey;
      //mostraremos estos nombres en la consola
      console.log("Room Name - " + Room_names);
      //creamos un div para mostrar cada nombre de cada sala con el id de cada sala
      //cada nombre de sala tendrá un evento ONCLICK
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //mostramos estos div dentro del div que tiene por ID "input"
      document.getElementById("output").innerHTML += row;
    });
  });

}

//ejecutamos la funcion "getData"
getData();


//funcion que se ejecuta al dar click en el nombre de alguna sala
//esta funcion tiene un parametro que será el nombre de la sala
function redirectToRoomName(name)
{
  //mostraremos en la consola el nombre de la sala a la que se esta redirigiendo
  console.log(name);
  //guardamos en el local storage el nombre de la sala
  localStorage.setItem("room_name", name);
  //cambiamos a la siguiente pagina
    window.location = "kwitter_page.html";
}


///////////////////////////

/////C96/////////
//////////111111111
//funcion que se ejecuta cuando se le de click al boton de salir
function logout() {
  //borraremos el nombre del usuario del localstorage
  localStorage.removeItem("user_name");
  //borraremos el nombre de la sala del local storage
  localStorage.removeItem("room_name");
  //volveremos a la pagina inicial
    window.location = "index.html";
}
