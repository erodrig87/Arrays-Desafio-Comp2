// Mensaje de informacion
alert("Boton 'Crear Gasto', inicia blucle de pedido de 3 gastos.\nBoton 'Reset Gastos', resetea variable utilizadas..\nBoton 'Mostrar Calculos', muestra resultados de calculos realizados.");

//Def variables globales
let gasto_total = 0;
let promedio = 0;
let gasto_max =0;
let gasto_min = 0;
let indice_gastos = 0;

class Gasto {
    constructor(id,fecha,categoria,valor) {  // Constructor
      this.id = id;
      this.fecha = fecha;
      this.categoria = categoria;
      this.valor = valor;
    }
  }
  mycar = new Car("Ford");

//Funcion mensaje estado variables globales
function alertStatus(){
    alert(`
    El promedio de los gastos ingresados es: ${promedio.toFixed(2)}
    El gasto maximo fue de: ${gasto_max.toFixed(2)}
    El gasto minimo fue de: ${gasto_min.toFixed(2)}
    El gasto total fue de: ${gasto_total.toFixed(2)}
    Cantidad de gastos ingresados: ${indice_gastos}`);
}

//Funcion resetea variables globales
function resetGastos(dias){
    
    gasto_total = 0;
    promedio = 0;
    gasto_max =0;
    gasto_min = 0;
    indice_gastos = 0;
    alertStatus();   
}

//funcion que devuelve fecha actual - x dias pasados como parametro utilizada en dashboard.js para modificar eje x del grafico
function restarDias(dias){
    fecha = new Date();
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
}

// funcion para crear gasto -> a futuro crear objeto/clase para ser cargado en la tabla en forma dinamica
function crearGasto()
{
    alert(`Como prueba se solicitan el ingreso de 3 valores`);
    
    let categoria;
    let valor;

    // loop para solicitar 3 ingresos
    for(let i=0;i<3;i++){
        
        fecha = new Date();
       
        fecha = prompt("ingresar fecha de gasto", fecha.toLocaleDateString());
        categoria = prompt("ingresar categoria de gasto");
        valor = parseFloat(prompt("ingresar valor de gasto"));
        indice_gastos++; // contador de gastos ingresados
    
        alert(`
        Gasto ingresado:
        Fecha: ${fecha}
        Categoria: ${categoria}
        Valor: ${valor.toFixed(2)}`);

        if(valor>gasto_max) gasto_max = valor; //identifica maximo
        if(valor<gasto_min||gasto_min==0) gasto_min = valor; //identifica minimo
        gasto_total += valor; //acumula gastos totales
    }
    promedio=gasto_total/indice_gastos; // calculo promedio gastos
    alertStatus();
}
