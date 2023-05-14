import React from 'react';
// MIS COMPONENTES
import useTareas from '../hooks/useTareas';
// INICIO
export const Tarea = ({ tarea }) => {
  // HOOKS
  const { setEdicion, eliminarTarea } = useTareas();
  // CONSTANTES
  const { nombre, descripcion, _id } = tarea;
  // RENDER
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold uppercase text-indigo-700 my-2'>
        Nombre Tarea:{' '}
        <span className='font-normal normal-case text-black'>
          {nombre}
        </span>
      </p>
      <p className='font-bold uppercase text-indigo-700 my-2'>
        Descripcion:{' '}
        <span className='font-normal normal-case text-black'>
          {descripcion}
        </span>
      </p>
      <div className='flex justify-between my-5'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg'
          onClick={() => setEdicion(tarea)}>
          Editar
        </button>
        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg'
          onClick={() => eliminarTarea(tarea._id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};
