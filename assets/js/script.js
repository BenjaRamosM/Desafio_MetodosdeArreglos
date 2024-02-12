let tareas = [
{id: 0, Nombre : "Limpiar el auto", realizado:false, eliminar:`<button type="submit" class="btn btn-primary btn-xs btn_del">eliminar</button>`},
{id: 1, Nombre : "Desarrollar desafio", realizado:false, eliminar:`<button type="submit" class="btn btn-primary btn-xs btn_del">eliminar</button>`},
{id: 3, Nombre : "preparar almuerzo", realizado:false, eliminar:`<button type="submit" class="btn btn-primary btn-xs btn_del">eliminar</button>`},
];

let cantidad_tareas = tareas.length;
let total_tareas = document.querySelector(".total_tareas");
let cantidad_realizadas=0;
let total_realizadas = document.querySelector(".total_realizadas");
let box1;
let btn_delete;

let texto = "";
let icono;

let tabla = document.querySelector(".tabla_tareas");
let btnAdd  = document.querySelector(".btn_add");
let task_name = document.querySelector('#input1');
let cnt = 0;
let i=0;
cnt++;


btnAdd.addEventListener("click",()=>{

 cnt++;
    let tarea = {id:"",Nombre:"",realizado:false,eliminar:`<button type="submit" class="btn btn-primary btn-xs btn_del">eliminar</button>`};

    task_name = document.querySelector('#input1');
    cantidad_tareas = tareas.length;
    tarea.id = cantidad_tareas + 1;
    tarea.Nombre = task_name.value;

    tareas.splice(cantidad_tareas,0,tarea);
    
    actualizar();
    
});

window.onload = actualizar();

function actualizar(){
 
    texto = "";

    cantidad_tareas = tareas.length;
    total_tareas.innerHTML = "Cantidad Total: " + cantidad_tareas;

    cantidad_realizadas=0;
    
    for(let nro_tarea of tareas){
        if(nro_tarea.realizado==false){
            icono = `
            <input type="checkbox" id="check_"  />
            `
        }
        else
        {
            icono = `
            <input type="checkbox" id="check_" checked />
            `
            cantidad_realizadas++;
        }
        
        texto+=`
            <div class ="tarea">
                <p class="card-text">
                    ${nro_tarea.id}
                </p>
                <p>
                    ${nro_tarea.Nombre} 
                </p>
                ${icono} 
                ${nro_tarea.eliminar}
            
            </div>
            `;
    
    }

    if(tabla!=null){
        tabla.innerHTML=texto;
    }
    
    total_realizadas.innerHTML="Realizadas: " + cantidad_realizadas;
    box1 = document.querySelectorAll('#check_');
    btn_delete = Array.from(document.querySelectorAll(".btn_del"));
    actualizarListener();
}





function actualizarListener(){

    btn_delete.forEach(function(borrar)
    {
        borrar.addEventListener("click",function(event){
            let indice = btn_delete.indexOf(borrar);
            tareas.splice(indice,1);
            console.log(btn_delete.indexOf(borrar));
            actualizar();
        });
    });

    box1.forEach(function(check_box)
    {
        check_box.addEventListener('change', function(){
            cantidad_realizadas=0;
            for(let j =0;j<tareas.length;j++){
                if(box1[j].checked){
                    tareas[j].realizado=true;
                }
                else
                {
                    tareas[j].realizado=false;
                }

                if(tareas[j].realizado){
                    cantidad_realizadas++;
                }
            }
            total_realizadas.innerHTML="Realizadas: " + cantidad_realizadas;
        
        
        });
    
    });
}


    




