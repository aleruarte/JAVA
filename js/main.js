
alert ("Bienvenido! seleccione que color desea para su prenda")

let color = +(prompt("¿1 Negro o 2 Blanco?"));

    if (color==1){
        alert("El color que elegiste es Negro")
    }   else if (color==2){
        alert("El color que elegiste es Blanco")
    }

let mangas = +(prompt("1 Mangas cortas 2 Mangas largas 3 Sin mangas"));

    switch (mangas) {
        case 1: {
            alert("Escogio Mangas cortas");
            break;
        }
        case 2: {
            alert("Escogio Mangas largas");
            break;
        }
        case 3: {
            alert("Escogio Sin Mangas");
            break;
        }
    }

let talle = +(prompt("¿Que talle desea para su prenda? (talle en numeros)"));

alert ("Elegiste" +" "+ talle +" ");

alert ("Gracias por confiar en nosotros, su pedido será despachado en unos instantes")

function guardarUsuario(){
    function usuario(nombre,apellido){
      this.nombre=nombre;
      this.apellido=apellido;
    }
    let nombreGuardar = document.getElementById("nombre").value;
    let apellidoGuardar = document.getElementById("apellido").value;
    nuevoUsuario = new usuario(nombreGuardar,apellidoGuardar);
    console.log(nuevoUsuario);
   
  }
  let arrUsuarios= [];
  function add(){
    arrUsuarios.push(nuevoUsuario);
    console.log(arrUsuarios);
   }

   let pedido = arrUsuarios.map(function(bar){

    return '<tbody><td>'+bar.nombre+'</td><td>'+bar.apellido+'</td><td>';
  })
  
  document.getElementById("pedido").innerHTML = pedido.join('');

  
