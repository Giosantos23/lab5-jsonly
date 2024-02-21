


function obtainSendMessages() {
    fetch('https://chat.arpanetos.lol/messages')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        for (let i = data.length - 1; i >= 0; i--) {
            agregarMensajeAlChat(data[i]);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}




function agregarMensajeAlChat(mensaje) {

    const {username, message, created_at  } = mensaje;
    const nuevoMensaje = document.createElement("div");
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    nuevoMensaje.textContent = message;

    p.textContent = username;
    p1.textContent = created_at;
    nuevoMensaje.appendChild(p);
    nuevoMensaje.appendChild(p1);

    nuevoMensaje.style.backgroundColor = "#f2f2f2";
    nuevoMensaje.style.padding = "10px";
    nuevoMensaje.style.borderRadius = "5px";
    nuevoMensaje.style.marginBottom = "10px";
    nuevoMensaje.style.border = "1px solid #ccc";

    const body = document.body;
    body.insertBefore(nuevoMensaje, body.firstChild);
}


  function postRequest(mensaje) {

    let h = new Date();
    let time = h.toLocaleTimeString();

    let data = {
        username: 'giovanni',
        message: mensaje,
        created_at: time
    }
    fetch('https://chat.arpanetos.lol/messages' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
}




function getMessages() {
    const botoncito = document.createElement("button");
    botoncito.textContent = "Enviar mensaje";
    botoncito.style.padding = "10px 20px";
    botoncito.style.backgroundColor = "#4CAF50";
    botoncito.style.color = "white";
    botoncito.style.border = "none";
    botoncito.style.borderRadius = "5px";
    botoncito.style.cursor = "pointer";
    botoncito.onclick = function () {
      const ingresarMnsg = document.getElementById("ingrese");
      const mensaje = ingresarMnsg.value;
      const fch = new Date();
      const giveTime = fch.toLocaleTimeString();
      const postPersona={
        username:"gio",
        message:"Hola mundito",
        created_at:giveTime
      };
      postRequest(
        "https://chat.arpanetos.lol/messages",
        postPersona,
        function (error, response) {
          if (error) {
            console.error("Error:", error);
          } else {
            console.log("Response:", response);
          }
        }
      );
  
      const nuevoMensaje = document.createElement("div");

      newmsgChat.textContent = mensaje;
      newmsgChat.style.backgroundColor = "#f2f2f2";
      newmsgChat.style.padding = "10px";
      newmsgChat.style.borderRadius = "5px";
      newmsgChat.style.marginBottom = "10px";
      newmsgChat.style.border = "1px solid #ccc";
      const msgChat = document.getElementById("msgChat");
      msgChat.insertBefore(nuevoMensaje, chatWindow.firstChild);
      inputMessage.value = "";
    };
  
    return buttonSend;
  }


  function mensaje (){
      const txt = document.createElement('textarea');
      const btn = document.createElement('button');

      txt.placeholder = 'Type your message (up to 140 characters)';

      btn.style.width = '80%';
      btn.style.height = '80%';

      const body = document.body;
        body.appendChild(txt);
        body.appendChild(btn);

    btn.addEventListener('click',() => {
        let mensaje = txt.value;
        postRequest(mensaje);
    })
      
  }



obtainSendMessages();
mensaje();

