 function limpiarFormulario() {
    document.getElementById("formulario").reset();
  }

  function consultaPizza(){
    var receta = document.getElementById("recetaID").value;

    if(receta =="")
    {
      alert("Se debe de ingreser un Id de receta para hacer la consulta");
      return;
    }
    document.getElementById("formaCuadrada").checked = true;
    document.getElementById("tamañoPequeño").checked = true;
    document.getElementById("salsaRoja").checked = true;
    document.getElementById("camarones").checked = true;
    document.getElementById("pulpo").checked = true;
    document.getElementById("salami").checked = true;
    document.getElementById("piña").checked = true;
    document.getElementById("brocoli").checked = true;
    document.getElementById("quesoMozarella").checked = true;
    document.getElementById("quesoColby").checked = true;
    document.getElementById("jamon").checked = true;
    document.getElementById("cebollaMorada").checked = true;
    document.getElementById("esparragos").checked = true;
    document.getElementById("carneRes").checked = true;
    document.getElementById("receta").value = "Pizza mil sabores"
    document.getElementById("nameID").value = "Juan Paco Pedro";
    document.getElementById("apellidoID").value = "De la Mar";
  }


  function Mensaje(flag)
  {

    var receta = document.getElementById("recetaID").value;

    if(receta =="")
    {
      alert("Se debe de ingreser un Id de receta ");
      return;
    }

    if(flag ==  "0")
    {
      alert("Se ha modificado la receta");
    }
    else{
      
      alert("Se ha eliminado la receta");
    }
    limpiarFormulario();
  }


  function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


  