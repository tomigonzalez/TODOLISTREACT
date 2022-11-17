import {useState} from 'react'
import './App.css';
import { Formulario } from './Components/Formulario';
import {Tarea} from './Components/Tarea';

function App() {

   const [tarea , setTarea]=useState('')  
   const [listadoTareas, setListadoTareas] = useState ([])


   //Local storage
   

   function handleSubmit(e){
    e.preventDefault()
    if(tarea===''){
      alert('DEBES PONER UNA TAREA')
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }
    
    const temp = [nuevaTarea, ...listadoTareas] 
    setListadoTareas(temp)

    setTarea('')

    console.log(listadoTareas)
   }

   function handleChange(e) {
    setTarea(e.target.value)
  
  
   }
 
   
   function onBorrarTarea (id){
    const temp = listadoTareas.filter(item=> item.id !== id)
    setListadoTareas(temp)
   }
  return (
    <>
        <div stly='contenedorPrincipal'>
          <h1>TO-DO LIST</h1>
              <div className='contenedorFormulario'>
              <Formulario
               tarea= {tarea}
               handleSubmit={handleSubmit}
               handleChange={handleChange}/>
              </div> 
              <div className='contenedorTareas'>
                <h2>Lista de tareas</h2>
                <div className='contenedorInfoTareas'>
                  {
                  listadoTareas.map(tarea=>(
                   <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    tarea={tarea}
                    onBorrarTarea={onBorrarTarea}/>
                  ))
                  }
                </div>
              </div>
        </div>
    </>
  );
}

export default App;
