/////////////C96
////////33333333333

//TUS ENLACES DE FIRE BASE

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



//traemos el nombre del usuario guardado en localstorage
	user_name = localStorage.getItem("user_name");

	room_name = localStorage.getItem("room_name");


  //funcion para enviar los mensajes
function send()
{
  //guardamos en una variable el mensaje que se haya escrito en el text input
  msg = document.getElementById("msg").value;
  //agregaremos este mensaje en la sala seleccionada
  //ref: la referencia de donde agregará el mensaje
  firebase.database().ref(room_name).push({
    //agregaremos un parametro para guardar el nombre de quien envió el mensaje
    name:user_name,
    //agregamos el mensaje introducido
    message:msg,
    //al inicio cada mensaje tendrá 0 likes
    like:0
   });
   //resetearemos el text input a vacio cuando ya se haya enviado el mensaje
  document.getElementById("msg").value = "";
}
////////////////////TERMINA C96


//////////////////NO SE CAMBIA
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  //se usará para guardar cada uno de los id de cada mensaje que se haya guardado en firebase       
  firebase_message_id = childKey;
  ///para guardar directamente el mensaje enviado
  message_data = childData;
/////////////////////////////




/////////////////////C97
//Inicia código
    //mostraremos en la consola el id del mensaje
    console.log(firebase_message_id);
    //tambien mostramos el mensaje guardado
	  console.log(message_data);
     //traemos el nombre del usuario que dijo cada mensaje y se guarda en la variable mensaje
	   name = message_data['name'];
     //guardamos el mensaje
	   message = message_data['message'];
     //guardamos la cantidad de likes
     like = message_data['like'];
     //Mostramos en la página el nombre del que envió el mensaje con una palomita
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     //para mostrar el mensaje
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    //para mostrar el boton de like
     
    ////////////podria ser opcional
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    //para terminar el contenido del boton 
    //el iciono de la mano de like
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
    //unimos todas las partes
    //////////////////


    row = name_with_tag + message_with_tag +like_button + span_with_tag;       
    //lo mostramos en la seccion output
    document.getElementById("output").innerHTML += row;
//Termina código
      } });  }); }
getData();




/////////considero que sería opcional
//para que se actualicen los likes
//se usará un parametro
function updateLike(message_id)
{
  //mostramos en la consola que se presiono el boton
  console.log("clicked on like button - " + message_id);

  //guardamos el id del mensaje en el id del boton
	button_id = message_id;
  //cambiamos en la pagina la cantidad de like
	likes = document.getElementById(button_id).value;
  //actualizamos los likes +1
	updated_likes = Number(likes) + 1;
  //mostramos en consola esta nueva cantidad de likes
	console.log(updated_likes);

  //guardamos en firebase la nueva cantidad de likes
	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

//para poder salir de sesion
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
