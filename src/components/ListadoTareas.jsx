import React from 'react';
// MIS COMPONENTES
import useTareas from '../hooks/useTareas';
import { Tarea } from './Tarea';

export const ListadoTareas = () => {
  // HOOKS
  const { tareas } = useTareas();

  return (
    <>
      {tareas.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado de tareas.
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus tareas
          </p>
          {tareas.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            No hay tareas.
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando tareas
          </p>
        </>
      )}
    </>
  );
};
