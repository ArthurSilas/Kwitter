const firebaseConfig = {
  apiKey: "AIzaSyDxjvpEmXFheTC3De5vKRtzLDNRrUKFhqQ",
  authDomain: "kwitter-829bf.firebaseapp.com",
  projectId: "kwitter-829bf",
  databaseURL: "https://kwitter-829bf-default-rtdb.firebaseio.com/",
  storageBucket: "kwitter-829bf.appspot.com",
  messagingSenderId: "754326531284",
  appId: "1:754326531284:web:130a0b3a3a283d38ac1f41"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}